import React, { useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {
  CoolToneAlternateBackgroundColor,
  DarkText,
  ErrorText,
  LightText,
} from "../utils/colors";
import CtaButton from "./ctaButton";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("A message is required"),
});

type FormspreeServerState = {
  ok: string;
  msg: string;
};

const FormGroup = styled(Form)`
  color: ${LightText};
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin: 0 0 1.5em 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  font-size: 1.15em;
  color: ${LightText};
  width: max-content;
`;

const Input = styled(Field)`
  padding: 1em;
  color: ${DarkText};
  background: ${CoolToneAlternateBackgroundColor};
  border: none;
  border-radius: 4px;
  width: 30vw;
  min-width: 20em;
`;

const ErrorLabel = styled(ErrorMessage)`
  font-size: 1.15em;
  color: ${ErrorText};
  margin-left: auto;
`;

const ContactWidget = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState<FormspreeServerState>();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xbjbdeqj",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks! I'll be in touch soon.");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error?.response?.data?.error || "");
      });
  };

  return (
    <Formik
      initialValues={{ email: "", message: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}>
      {({ isSubmitting }) => (
        <FormGroup id="fs-frm" noValidate>
          <InputWrapper>
            <InputGroup>
              <Label htmlFor="name">Full Name</Label>
              <ErrorLabel name="name" className="errorMsg" component="p" />
            </InputGroup>
            <Input
              id="name"
              type="name"
              name="name"
              placeholder="Dorian Gray"
            />
          </InputWrapper>

          <InputWrapper>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <ErrorLabel name="email" className="errorMsg" component="p" />
            </InputGroup>

            <Input
              id="email"
              type="email"
              name="email"
              placeholder="dorian@mercuryevenings.com"
            />
          </InputWrapper>

          <InputWrapper>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <ErrorLabel name="message" className="errorMsg" component="p" />
            </InputGroup>
            <Input
              id="message"
              name="message"
              component="textarea"
              placeholder="Tell me more about what's on your mind"
            />
          </InputWrapper>

          <CtaButton text="Submit" disabled={isSubmitting} submit />
          {!!serverState && (
            <p className={!serverState.ok ? "errorMsg" : ""}>
              {serverState.msg}
            </p>
          )}
        </FormGroup>
      )}
    </Formik>
  );
};

export default ContactWidget;
