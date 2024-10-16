"use client";
import React from "react";
import FormLeft from "@/components/auth/formLeft";
import FormRight from "@/components/auth/formRight";
import { updatePassword } from "@/lib/redux/authSlice";

// Form Input Field
const formInputField = [
  {
    id: "existing_password",
    label: "Existing Password",
    type: "Password",
    placeholder: "Enter New Password",
    required: true,
  },
  {
    id: "new_password",
    label: "New Password",
    type: "Password",
    placeholder: "Enter New Password",
    required: true,
    tooltipContent: "Password must be at least 8 characters long.",
  },
  {
    id: "conf_new_password",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
];

// Form Submit buttons
const formSubmitButton = [
  {
    text: "Submit",
    type: "button",
    variant: "primary",
    id: "submit",
    className: "w-full py-4 px-12 h-[56px] mt-8 hover hover-primary",
  },
];

const ResetPassword = () => {
  return (
    <section className="login">
      <div className="mx-auto lg:mx-0">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0 px-5 h-screen">
          <FormLeft
            title="Alium"
            heading="Start your journey with us.."
            discription="Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non"
            image="../images/loginimg.svg"
          />

          <FormRight
            heading="Reset password"
            discription="Enter your password to reset your account password."
            inputFields={formInputField}
            formButtons={formSubmitButton}
            showDevide={false}
            onSubmitAction={updatePassword}
          />
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
