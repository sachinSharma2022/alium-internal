import React, { useState } from "react";
import CheckBox from "./index";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <CheckBox {...args} checked={isChecked} onChange={handleChange} />;
};

export const DefaultCheckBox = Template.bind({});
DefaultCheckBox.args = {
  text: "Default Checkbox",
  variant: "primary",
  size: "sm",
  checked: false,
};

export const CheckedCheckBox = Template.bind({});
CheckedCheckBox.args = {
  text: "Checked Checkbox",
  variant: "primary",
  size: "md",
  checked: true,
};

export const LargeCheckBox = Template.bind({});
LargeCheckBox.args = {
  text: "Large Checkbox",
  variant: "primary",
  size: "lg",
  checked: false,
};

export const SecondaryVariantCheckBox = Template.bind({});
SecondaryVariantCheckBox.args = {
  text: "Secondary Variant",
  variant: "secondary",
  size: "sm",
  checked: false,
};

export const CustomClassCheckBox = Template.bind({});
CustomClassCheckBox.args = {
  text: "Checkbox with Custom Class",
  variant: "primary",
  size: "md",
  customClass: "text-blue-600",
  checked: false,
};
