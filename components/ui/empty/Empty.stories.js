import React from "react";
import Empty from "./index";
import placeholderImg from "../../../public/images/empty.svg";
import iconImg from "../../../public/images/pluss.svg";

export default {
  title: "Components/Empty",
  component: Empty,
};

const Template = (args) => <Empty {...args} />;

export const DefaultEmptyState = Template.bind({});
DefaultEmptyState.args = {
  img: placeholderImg,
  title: "No Data Available",
  description:
    "There seems to be no data at the moment. Please try again later.",
  buttonText: "Add New Workspace",
  icon: iconImg,
};
