import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {
  CoolToneAlternateBackgroundColor,
  DarkText,
  ErrorText,
  LightText,
} from "../utils/colors";
import CtaButton from "./ctaButton";
import { MIN_TABLET_WIDTH } from "../utils/utils";
import axios from "axios";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("A message is required"),
});

const FormGroup = styled(Form)`
  color: ${LightText};
  display: flex;
  flex-direction: column;
  min-width: 15em;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    width: 30vw;
    min-width: 18em;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: Row;
  flex-wrap: wrap;
  column-gap: 0.75em;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin: 0 0 1.5em 0;
  flex: 1 1 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: min(max(1em, 2.25vw), 1.15em);
    color: ${ErrorText};
    margin-left: auto;
  }
`;

const Label = styled.label`
  font-size: min(max(1em, 2.25vw), 1.15em);
  color: ${LightText};
  width: max-content;
`;

const Input = styled(Field).attrs<{
  error?: string;
}>((props) => ({
  error: props.error || "false",
}))<{ error?: string }>`
  padding: min(max(0.75em, 3vw), 1em);
  font-size: min(max(0.95em, 2.25vw), 1em);
  color: ${DarkText};
  background: ${CoolToneAlternateBackgroundColor};
  outline: ${(props) =>
    props.error === "true" ? `0.25em solid ${ErrorText}` : `none`};
  border-radius: 4px;
`;

type InputWithErrorHighlightProps = {
  id: string;
  type?: string;
  component?: string;
  name: string;
  placeholder: string;
};

const InputWithErrorHighlight = ({
  id,
  type = "",
  component = "",
  name,
  placeholder,
}: InputWithErrorHighlightProps) => {
  const [field, meta] = useField(name);
  return (
    <Input
      id={id}
      type={type}
      name={name}
      component={component}
      placeholder={placeholder}
      error={(!!meta.error && !!meta.touched).toString()}
    />
  );
};

type ContactWidgetServerState = {
  ok: boolean;
  msg: string;
};

const ErrorLabel = styled(ErrorMessage)``;

const ServerStatusLabelWrapper = styled.div`
  min-height: 1.25em;
`;

const ServerStatusLabel = styled.p``;

const ContactWidget = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState<ContactWidgetServerState>();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = async (values, actions) => {
    console.log("submit");
    console.log(values);
    try {
      const response = await axios.post(
        "/api/createAirtableContactFormEntry/",
        values
      );
      actions.setSubmitting(false);
      actions.resetForm();
      handleServerResponse(true, "Thanks! I'll be in touch soon.");
    } catch (error) {
      actions.setSubmitting(false);
      handleServerResponse(false, error?.response?.data?.error || "");
    }
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}>
      {({ isSubmitting }) => (
        <FormGroup id="fs-frm" noValidate>
          <InputRow>
            <InputWrapper>
              <InputGroup>
                <Label htmlFor="firstName">First Name</Label>
                <ErrorLabel
                  name="firstName"
                  className="errorMsg"
                  component="p"
                />
              </InputGroup>
              <InputWithErrorHighlight
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Dorian"
              />
            </InputWrapper>

            <InputWrapper>
              <InputGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <ErrorLabel
                  name="lastName"
                  className="errorMsg"
                  component="p"
                />
              </InputGroup>
              <InputWithErrorHighlight
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Gray"
              />
            </InputWrapper>
          </InputRow>

          <InputWrapper>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <ErrorLabel name="email" className="errorMsg" component="p" />
            </InputGroup>
            <InputWithErrorHighlight
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
            <InputWithErrorHighlight
              id="message"
              component="textarea"
              name="message"
              placeholder="Tell me more about what's on your mind"
            />
          </InputWrapper>

          <CtaButton text="Submit" disabled={isSubmitting} submit />
          <ServerStatusLabelWrapper>
            {!!serverState && (
              <ServerStatusLabel className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </ServerStatusLabel>
            )}
          </ServerStatusLabelWrapper>
        </FormGroup>
      )}
    </Formik>
  );
};

export default ContactWidget;
