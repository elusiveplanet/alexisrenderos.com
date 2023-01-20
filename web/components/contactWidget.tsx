import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CtaButton from "./ctaButton";
import {
  CheckboxInput,
  CheckboxInputWrapper,
  ErrorLabel,
  FormGroup,
  InputGroup,
  InputRow,
  InputWithErrorHighlight,
  InputWrapper,
  Label,
  ServerState,
  ServerStatusLabel,
  ServerStatusLabelWrapper,
} from "./formInput";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("A message is required"),
});

const ContactWidget = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState<ServerState>();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        "/api/createAirtableFormEntry/",
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
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        resRequest: false,
      }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}>
      {({ isSubmitting }) => (
        <FormGroup id="airtable-backend-form" {...{ netlify: "" }} noValidate>
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
              placeholder="What's on your mind?"
            />
          </InputWrapper>

          <CheckboxInputWrapper>
            <CheckboxInput name="resRequest" labelText="Request resume?" />
          </CheckboxInputWrapper>

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
