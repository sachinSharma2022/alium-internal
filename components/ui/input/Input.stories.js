import React, { useState } from "react";
import { InputField, Error, Success } from "./index";

export default {
  title: "Components/InputField",
  component: InputField,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (args.onChange) args.onChange(e);
  };

  return (
    <div className="relative">
      <InputField {...args} value={value} onChange={handleChange} />
      {args.error && <Error>{args.error}</Error>}
      {args.success && <Success>{args.success}</Success>}
    </div>
  );
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  id: "username",
  placeholder: "Enter your username",
  required: false,
  className: "",
  inputWidth: "",
  inputHeight: "",
  disabled: false,
};

export const RequiredInput = Template.bind({});
RequiredInput.args = {
  id: "email",
  placeholder: "Enter your email",
  required: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: "disabledField",
  placeholder: "Disabled input",
  disabled: true,
};

export const CustomSizedInput = Template.bind({});
CustomSizedInput.args = {
  id: "customSize",
  placeholder: "Custom size input",
  inputWidth: "max-w-xs", // Custom width
  inputHeight: "h-[3.5rem]", // Custom height
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: "password",
  placeholder: "Enter your password",
  error: "Password must be at least 8 characters",
};

export const InputWithSuccess = Template.bind({});
InputWithSuccess.args = {
  id: "phone",
  placeholder: "Enter your phone number",
  success: "Phone number is valid",
};
