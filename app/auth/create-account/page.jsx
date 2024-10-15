"use client";
import React from "react";
import FormLeft from "@/components/auth/formLeft";
import FormRight from "@/components/auth/formRight";
import { registerUser } from "@/lib/redux/authSlice";

const inputFields = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: "organisationName",
    label: "Organisation Name",
    type: "text",
    placeholder: "Organisation Name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "createPassword",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const loginButtons = [
  {
    text: "Ragister",
    variant: "primary",
    type: "button",
    className: "w-full py-4 px-12 h-[56px] mt-8 hover hover-primary",
  },
];

const CreateAccount = () => {
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
            heading="Create An Account"
            discription="Register for a new membership"
            haveAnAccount="Already have an account?"
            linkHref="/auth/login"
            signup="Sign in"
            showDevide={true}
            inputFields={inputFields}
            showForm={true}
            formButtons={loginButtons}
            showCheckbox={false}
            socialLogInButtons={true}
            buttonText="Register"
            showTooltip={true}
            onSubmitAction={registerUser}
          />
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
