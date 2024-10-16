"use client";
import React from "react";
import FormLeft from "@/components/auth/formLeft";
import FormRight from "@/components/auth/formRight";
import { resetPassword } from "@/lib/redux/authSlice";

// Form Input Field
const formInputField = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
];

// Form Submit buttons
const formSubmitButton = [
  {
    text: "Submit",
    type: "button",
    variant: "primary",
    id: "signUp",
    className: "w-full py-4 px-12 h-[56px] mt-8 hover hover-primary",
  },
];

const ForgotPassword = () => {
  return (
    <section className="forgotPassword">
      <div className="mx-auto lg:mx-0">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0 px-5 h-screen">
          <FormLeft
            title="Alium"
            heading="Start your journey with us.."
            description="Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non"
            image="../images/loginimg.svg"
          />

          <FormRight
            heading="Forgot password?"
            description="Enter your details below to request an account password reset."
            showDevide={false}
            inputFields={formInputField}
            showForm={true}
            formButtons={formSubmitButton}
            showCheckbox={false}
            socialLogInButtons={false}
            buttonText="Submit"
            onSubmitAction={resetPassword}
          />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
