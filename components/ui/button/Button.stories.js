import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["none", "default", "blueBtn", "redBtn"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "xs", "sm", "lg"],
    },
  },
};

const Template = (args) => <Button {...args} className="button" />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  children: "Default Button",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  variant: "blueBtn",
  size: "default",
  children: "Blue Button",
};

export const RedButton = Template.bind({});
RedButton.args = {
  variant: "redBtn",
  size: "default",
  children: "Red Button",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  variant: "default",
  size: "sm",
  children: "Small Button",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  variant: "default",
  size: "lg",
  children: "Large Button",
};
