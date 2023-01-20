import styled from "styled-components";
import { ErrorMessage, Field, Form, useField } from "formik";
import React from "react";
import {
  CoolToneAlternateBackgroundColor,
  DarkText,
  DarkTextAlternate,
  ErrorText,
  LightText,
  SaffronYellow,
  SaffronYellowSlightlyTransparent,
} from "../utils/colors";
import { MIN_TABLET_WIDTH } from "../utils/utils";

export type ServerState = {
  ok: boolean;
  msg: string;
};

export const FormGroup = styled(Form)`
  color: ${LightText};
  display: flex;
  flex-direction: column;
  min-width: 15em;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    min-width: 18em;
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75em;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    gap: 1.25em;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin: 0 0 1.5em 0;
  flex: 1 1 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: min(max(1em, 2.25vw), 1.15em);
    color: ${ErrorText};
    margin-left: auto;
  }
`;

export const Label = styled.label`
  font-size: min(max(1em, 2.25vw), 1.15em);
  color: ${LightText};
  width: fit-content;
`;

export const Input = styled(Field).attrs<{
  error?: string;
}>((props) => ({
  error: props.error || "false",
}))<{ error?: string }>`
  padding: min(max(0.75em, 3vw), 1em);
  font-size: min(max(0.95em, 2.25vw), 1em);
  color: ${DarkText};
  background: ${CoolToneAlternateBackgroundColor};
  box-shadow: ${(props) =>
    props.error === "true" ? `0 0 0 3px ${ErrorText}` : `none`};
  border-radius: 4px;
  width: 100%;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    box-shadow: ${(props) =>
      props.error === "true" ? `0 0 0 4px ${ErrorText}` : `none`};
  }
`;

type CheckboxInputProps = {
  name: string;
  labelText: string;
  value?: string;
};

const StyledCheckbox = styled(Field)`
  accent-color: ${SaffronYellow};
  margin: 0;
  height: min(max(1.15em, 2.25vw), 1.35em);
  width: min(max(1.15em, 2.25vw), 1.35em);
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    height: 1.5em;
    width: 1.5em;
  }
`;

const CheckboxLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  align-items: center;
  align-content: center;
  font-size: min(max(1em, 2.25vw), 1.15em);
  color: ${LightText};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    padding-top: 0.25em;
    font-size: 1.25em;
  }
`;

export const CheckboxInput = ({
  name,
  labelText,
  value = "",
}: CheckboxInputProps) => (
  <CheckboxLabel htmlFor={name}>
    <StyledCheckbox id={name} type="checkbox" name={name} />
    {labelText}
  </CheckboxLabel>
);

export const CheckboxInputWrapper = styled(InputWrapper)`
  margin: 0 0 1em 0;
`;

type InputWithErrorHighlightProps = {
  id: string;
  type?: string;
  component?: string;
  name: string;
  placeholder: string;
};

const InputErrorIcon = styled.p`
  display: flex;
  position: absolute;
  font-weight: 700;
  z-index: 150;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: min(max(1em, 2.25vw), 1.15em);
  height: min(max(1em, 2.25vw), 1.15em);
  margin: min(max(0.75em, 3vw), 1em);
  color: ${DarkTextAlternate};
  background: ${SaffronYellowSlightlyTransparent};
`;

const InputWithErrorHighlightWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const InputWithErrorHighlight = ({
  id,
  type = "",
  component = "",
  name,
  placeholder,
}: InputWithErrorHighlightProps) => {
  const [field, meta] = useField(name);
  const error = !!meta.error && !!meta.touched;
  return (
    <InputWithErrorHighlightWrapper>
      <Input
        id={id}
        type={type}
        name={name}
        component={component}
        placeholder={placeholder}
        error={error.toString()}
        {...{ "data-hj-allow": "" }}
      />
      {!!error && <InputErrorIcon>!</InputErrorIcon>}
    </InputWithErrorHighlightWrapper>
  );
};

export const ErrorLabel = styled(ErrorMessage)`
  display: none;
`;

export const ServerStatusLabelWrapper = styled.div`
  min-height: 1.25em;
`;

export const ServerStatusLabel = styled.p``;
