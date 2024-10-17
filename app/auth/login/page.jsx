"use client";
import FormLeft from "@/components/auth/formLeft";
import FormRight from "@/components/auth/formRight";
import React from "react";
import { loginUser } from "@/lib/redux/authSlice";

// Form Input Field
const formInputField = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

// Form Sign UP buttons
const formSignUP = [
  {
    text: "Sign Up",
    type: "button",
    variant: "primary",
    id: "signUp",
    className: "w-full py-4 px-12 h-[56px] mt-8",
  },
];

const Login = () => {
  return (
    <section className="login">
      <div className="mx-auto lg:mx-0">
        <div className="flex xl:flex-row md:flex-row flex-col items-center gap-6 md:gap-0 px-5 h-screen">
          <FormLeft
            title="Alium"
            heading="Start your journey with us.."
            description="Lorem ipsum dolor sit amet consectetur. Neque sit at adipiscing massa et sem tempus. At non"
            image="../images/loginimg.svg"
          />

          <FormRight
            heading="Log in"
            description="Welcome back! please enter your details"
            haveAnAccount="Don’t have an account?"
            signup="Sign up"
            showDevide={true}
            inputFields={formInputField}
            showForm={true}
            formButtons={formSignUP}
            showCheckbox={true}
            buttonText="Sign in"
            socialLogInButtons={true}
            linkHref="/auth/create-account"
            onSubmitAction={loginUser}
            redirect="/workspace"
            actionType="login"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
