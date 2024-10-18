import React from "react";
import RadioButton from "./index";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    type: { control: "text" },
    label: { control: "text" },
    htmlFor: { control: "text" },
    className1: { control: "text" },
    className2: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Radio Button",
  type: "radio",
  id: "radio-default",
  htmlFor: "radio-default",
  className1: "",
  className2: "",
  name: "radio-group",
  value: "default",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Radio Button",
  type: "radio",
  id: "radio-checked",
  htmlFor: "radio-checked",
  className1: "peer-checked:bg-primary-blue",
  className2: "",
  name: "radio-group",
  value: "checked",
};
