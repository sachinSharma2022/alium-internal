import React from "react";
import SearchPrimary from "./index";
import searchIcon from "../../../public/images/search.svg";

export default {
  title: "Components/SearchPrimary",
  component: SearchPrimary,
};

const Template = (args) => <SearchPrimary {...args} />;

export const PrimarySearch = Template.bind({});
PrimarySearch.args = {
  icon: searchIcon,
  placeholder: "Search...",
  variant: "primary",
  iconPosition: "left-12",
};

export const SecondarySearch = Template.bind({});
SecondarySearch.args = {
  icon: searchIcon,
  placeholder: "Find a product...",
  variant: "secondary",
  iconPosition: "left-12",
};

export const CustomIconPositionSearch = Template.bind({});
CustomIconPositionSearch.args = {
  icon: searchIcon,
  placeholder: "Search here...",
  variant: "primary",
  iconPosition: "left-20",
};

export const CustomClassSearch = Template.bind({});
CustomClassSearch.args = {
  icon: searchIcon,
  placeholder: "Search anything...",
  variant: "primary",
  iconPosition: "left-12",
  className: "w-[25rem]", // Custom width for the search bar
};
