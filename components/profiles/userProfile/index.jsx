"use client";
import InputField from "@/components/ui/input";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
import UploadImage from "../uploadImage";

const countryCodes = [{ code: "+91" }, { code: "+1" }, { code: "+255" }];

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const [selectedCode, setSelectedCode] = useState("+91");

  const handleSelectChange = (code) => {
    setSelectedCode(code);
  };

  let [isOpen, setIsOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const profileToggle = () => {
    setEditProfile(!editProfile);
  };

  return (
    <div className="pt-5 px-4 bg-white-smoke w-full">
      {/* Go Back button */}
      <div>
        <Link href="#" className="flex items-center">
          <Image
            src="images/arrow-left.svg"
            width={20}
            height={20}
            alt="go back"
            className="mr-3"
          />
          <span className="font-semibold text-primary-blue">Go Back</span>
        </Link>
      </div>
      {/* Profile Content  */}
      <div className="bg-white h-[500px] p-6 rounded-xl mt-6">
        <h6 className="text-black-primary border-b border-borderPrimary pb-3">
          {editProfile ? "Edit Profile" : "User Profile"}
        </h6>

        <UploadImage
          profilePhoto={
            editProfile ? "images/user-image.svg" : "images/user-image.svg"
          }
          profileTitle={editProfile ? "Upload Picture" : "John Dohe"}
          profileDescription={
            editProfile
              ? "Profile picture must be in PNG or JPG format and under 2 MB."
              : "Admin"
          }
        />

        {/* Profile Input field  */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-6 pb-6 border-b border-borderPrimary">
          <div className="">
            <InputField
              label="Full Name"
              placeholder="Full Name"
              disabled={!editProfile ? true : false}
            />
          </div>
          <div className="">
            <InputField
              label="Phone Number"
              placeholder="Phone Number"
              className="relative placeholder:pl- 12 pl-[5.375rem]"
              countryCode={true}
              selectedCode={selectedCode}
              handleSelectChange={handleSelectChange}
              countryCodes={countryCodes}
              disabled={!editProfile ? true : false}
              type="tel"
            />
          </div>
          <div className="">
            <InputField
              label="Email Address"
              placeholder="johndoe1@email.com"
              type="email"
              disabled={!editProfile ? true : false}
            />
          </div>
          <div className="">
            <InputField
              label="Company Name"
              placeholder="Company Name"
              disabled={!editProfile ? true : false}
            />
          </div>
        </div>

        {/* Buttons   */}
        <div className="flex items-center justify-between mt-6">
          <div className="w-auto">
            {editProfile ? (
              <Button size="sm" className="hover hover-secondary">
                Cancel
              </Button>
            ) : (
              <Button
                size="sm"
                className="hover hover-secondary"
                onClick={() => setIsOpen(true)}
              >
                Change Password
              </Button>
            )}
          </div>
          <div className="w-auto">
            {editProfile ? (
              <Button variant="blueBtn" size="sm" onClick={profileToggle}>
                Save
              </Button>
            ) : (
              <Button variant="blueBtn" size="sm" onClick={profileToggle}>
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {/* Modal  */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-[38.75rem] space-y-4 border bg-white p-6 rounded-xl shadow2">
              <DialogTitle className="flex items-center justify-between">
                <h6 className="font-bold text-black-primary">
                  Change Password
                </h6>
                <button onClick={() => setIsOpen(false)}>
                  <Image
                    src="images/close.svg"
                    width={20}
                    height={20}
                    alt="not found"
                  />
                </button>
              </DialogTitle>
              <div className="space-y-6 pb-3">
                <div className="relative">
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
                  <InputField label="Current Password" type="password" />
                </div>
                <div className="relative">
                  <div className="absolute w-[300px] left-28 top-[2px]"></div>
                  <InputField
                    label="New Password"
                    type="password"
                    // showTooltip={true}
                    tooltipContent="Use at least 8 characters. Don’t use a password from another site, or something obvious like your pet’s name."
                  />
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
                </div>
                <div className="relative">
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
                  <InputField label="Confirm Password" type="password" />
                </div>
              </div>
              <div className="flex gap-4 border-t border-borderPrimary pt-6">
                <Button size="sm" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button variant="blueBtn" size="sm">
                  Save
                </Button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default UserProfile;
