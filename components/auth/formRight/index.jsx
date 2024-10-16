"use client";
import Link from "next/link";
import Image from "next/image";
import InputField from "../../ui/input";
import CheckBox from "../../ui/checkbox";
import { Button } from "../../ui/button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Label from "@/components/ui/label";
import useAuthRouting from "@/lib/hooks/useAuthRouting";
import { useRouter } from "next/navigation";

// Social Button Link
const socialLogInButton = [
  { text: "Google", src: "../images/google.svg" },
  { text: "Facebook", src: "../images/facebook.svg" },
  { text: "Github", src: "../images/github.svg" },
];

// PasswordStrength
const bars = 4;

const FormRight = ({
  heading,
  description,
  haveAnAccount,
  signup,
  inputFields = [],
  showForm = true,
  showCheckbox = false,
  socialLogInButtons = false,
  showDevide = true,
  linkHref = "/",
  buttonText,
  onSubmitAction,
  redirect,
  actionType,
}) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  // Email Validation Function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formValues };
    const newErrors = {};
    if (!validateEmail(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!validatePassword(formValues.password)) {
      newErrors.password = "Password should be at least 8 characters long.";
    }
    // If there are validation errors, update the error state and do not proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    if (onSubmitAction) {
      dispatch(onSubmitAction(payload)); // Dispatch action
    } else {
      router.push(redirect);
    }
  };
  const handleInputChange = (field, value) => {
    console.log(`Updating ${field} to ${value}`);
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  // Show / Hide Password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  redirect && useAuthRouting(redirect, actionType);
  return (
    <div className="lg:max-w-[480px] w-full ml-auto xl:mx-auto">
      {/* text  */}
      <div className="mb-12">
        <h2 className="text-black">{heading}</h2>
        <p className="text-xl leading-[30px] mt-3 lg:w-[430px]">
          {description}
        </p>
      </div>

      {/* form (conditionally rendered) */}
      {showForm && (
        <form>
          <div>
            {/* First and Last Name in the same row */}
            <div
              className={`flex gap-5 ${
                inputFields.some(
                  (field) =>
                    field.id === "fullName" || field.id === "organisationName"
                )
                  ? "mb-5"
                  : ""
              }`}
            >
              {inputFields
                .filter(
                  (field) =>
                    field.id === "fullName" || field.id === "organisationName"
                )
                .map((field) => (
                  <div className="w-1/2" key={field.id}>
                    <Label labelText={field.label} />
                    <InputField
                      label={field.label}
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="focus:border-gray-light"
                      value={formValues[field.id]} // Controlled input
                      onChange={(e) =>
                        handleInputChange(field.id, e.target.value)
                      } // Handle input change
                    />
                  </div>
                ))}
            </div>

            {/* Other fields like Email and Password */}
            {inputFields
              .filter(
                (field) =>
                  field.id !== "fullName" && field.id !== "organisationName"
              )
              .map((field) => (
                <div className="mb-5 relative" key={field.id}>
                  <Label
                    labelText={field.label}
                    tooltipContent={field.tooltipContent}
                  />
                  <InputField
                    value={formValues[field.id]} // Controlled input
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                    label={field.label}
                    id={field.id}
                    type={
                      [
                        "password",
                        "newPassword",
                        "confirmPassword",
                        "createPassword",
                      ].includes(field.id) && showPassword
                        ? "text"
                        : field.type
                    }
                    placeholder={field.placeholder}
                    required={field.required}
                    className="focus:border-gray-light"
                    showTooltip={["newPassword", "createPassword"].includes(
                      field.id
                    )}
                  />
                  {/* Display email validation error */}
                  {field.id === "email" && errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                  {/* Display password validation error */}
                  {field.id === "password" && errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}
                  {/* eye icon for password-related fields */}
                  {[
                    "password",
                    "newPassword",
                    "confirmPassword",
                    "createPassword",
                  ].includes(field.id) && (
                    <Image
                      className="absolute top-11 right-4 cursor-pointer"
                      src={
                        showPassword
                          ? "../images/eye.svg"
                          : "../images/eye-off.svg"
                      }
                      alt="eye icon"
                      width={20}
                      height={20}
                      onClick={togglePasswordVisibility}
                    />
                  )}

                  {["newPassword", "createPassword"].includes(field.id) && (
                    <div>
                      <ul className="flex items-center gap-2 mt-2 *:rounded-[30px]">
                        {Array.from({ length: bars }).map((_, index) => (
                          <li
                            key={index}
                            className={`w-[77px] h-1 bg-american-silver rounded-[30px]`}
                          />
                        ))}
                        <li className="ml-2 text-gray-500">Weak</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            {/* Forgot Password  */}
            {showCheckbox && (
              <div className="flex items-center justify-between mb-8 mt-8">
                <CheckBox
                  size="sm"
                  text="Remember for 30 days"
                  customClass="font-medium"
                />
                <div>
                  <Link
                    className="font-bold text-primary-blue"
                    href="/auth/forgot-password"
                  >
                    Forgot password
                  </Link>
                </div>
              </div>
            )}
            {/* {actionType === "resetPasswordSuccess" ? (
              <Link href={"/auth/login"}>
                <Button variant="blueBtn" size="sm">
                  {buttonText ? buttonText : "Login"}
                </Button>
              </Link>
            ) : (
              <Button variant="blueBtn" size="sm" onClick={handleSubmit}>
                {buttonText ? buttonText : "Sign Up"}
              </Button>
            )} */}
            <Button variant="blueBtn" size="sm" onClick={handleSubmit}>
              {buttonText ? buttonText : "Sign Up"}
            </Button>
          </div>
        </form>
      )}
      {/* SignUp  */}
      <div className="flex flex-col gap-6 mt-6">
        {/* item-1  */}
        <div className="flex items-center justify-center">
          <p className="font-medium text-gray-light mr-2">{haveAnAccount}</p>
          <Link href={linkHref} className="font-bold text-primary-blue">
            {signup}
          </Link>
        </div>
        {/* OR Devide Section  */}
        {showDevide && (
          <div>
            <p className="text-center font-bold text-black bg-white w-fit mx-auto px-8 relative z-20">
              OR
            </p>
            {/* line  */}
            <div className="relative after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#E0E0E0] after:bottom-3  after:left-0 after:-z-10 before:content-[''] before:absolute before:w-1/2 before:h-[2px] before:bg-[#E0E0E0] before:bottom-3 before:right-0 before:-z-10"></div>
          </div>
        )}

        {/* Social Login Buttons  */}
        {socialLogInButtons && ( // Conditionally render social buttons
          <div className="flex items-center gap-4">
            {socialLogInButton.map((item, index) => (
              <Link
                href="/"
                className="hover hover-secondary flex gap-3 rounded-lg py-3 px-8 bg-white text-black-primary font-medium"
                key={index}
              >
                <Image src={item.src} width={20} height={20} alt="not found" />
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormRight;
