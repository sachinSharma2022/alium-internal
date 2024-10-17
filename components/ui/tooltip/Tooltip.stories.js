import React from "react";
import ToolTip from "./index";
import infoIcon from "../../../public/images/info-circle.svg";

export default {
  title: "Components/ToolTip",
  component: ToolTip,
};

const Template = (args) => <ToolTip {...args} />;

export const DefaultToolTip = Template.bind({});
DefaultToolTip.args = {
  children: "This is a tooltip",
  icon: infoIcon,
  alt: "Info",
};

export const CustomContentToolTip = Template.bind({});
CustomContentToolTip.args = {
  children: (
    <p>
      <strong>Note:</strong> This is a custom tooltip with <em>HTML content</em>
      .
    </p>
  ),
  icon: infoIcon,
  alt: "Info",
};

export const PrimaryVariantToolTip = Template.bind({});
PrimaryVariantToolTip.args = {
  children: "Primary variant tooltip",
  icon: infoIcon,
  alt: "Info",
  variant: "primary",
};
