import React from "react";
import Label from "./index";

export default {
  title: "Components/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  labelText: "Username",
  showTooltip: false,
  className: "",
};

export const LabelWithTooltip = Template.bind({});
LabelWithTooltip.args = {
  labelText: "Password",
  showTooltip: true,
  className: "",
};

export const CustomClassLabel = Template.bind({});
CustomClassLabel.args = {
  labelText: "Email",
  showTooltip: false,
  className: "text-red-500", // Example of a custom class for red text
};

export const LabelWithCustomTooltip = Template.bind({});
LabelWithCustomTooltip.args = {
  labelText: "Security Question",
  showTooltip: true,
  className: "",
};
