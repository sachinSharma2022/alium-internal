"use client";
import React, { useState } from "react";
import Image from "next/image";
import RadioButton from "../radioButton";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "../button";

const AdminDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50 w-[17.5rem] min-h-[19rem ] p-4 bg-white shadow1 border border-borderPrimary rounded-lg z-30">
      <div className="text-end">
        <Button variant="none">
          <Image
            src="/images/close.svg"
            width={20}
            height={20}
            alt="close profile button"
          />
        </Button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          {/* Profile picture */}
          <Image
            src="/images/User-Image.svg"
            alt="Profile"
            width={62}
            height={62}
            className="rounded-full w-12 h-12"
          />
          <div>
            <h6 className="font-bold text-black-primary">Neeraj Sharma</h6>
            <p className="edgecase text-tricorn-black font-medium">
              johndoe@gmail.com
            </p>
            <p className="edgecase text-gray-light font-medium">Admin</p>
          </div>
        </div>
      </div>

      <div className="bg-white-smoke rounded-lg px-3 py-4 mt-4">
        {/* Profile options */}
        <div>
          <button className="w-full text-left text-tricorn-black font-medium pb-4 border-b border-borderPrimary flex gap-2 pl-2 items-center">
            <figure>
              <Image src="/images/user.svg" width={20} height={20} alt="user" />
            </figure>
            Profile
          </button>
        </div>

        {/* Organisation Dropdown */}
        <div className="mt-4 border-b border-borderPrimary pb-4">
          <Popover>
            {({ open }) => (
              <div className="popover">
                <PopoverButton className="flex items-center gap-2 w-full">
                  <div className="flex items-center justify-between w-full bg-white-smoke font-medium  focus:outline-none text-tricorn-black pl-2">
                    <div className="flex gap-2">
                      <figure>
                        <Image
                          src="/images/building.svg"
                          width={20}
                          height={20}
                          alt="building"
                        />
                      </figure>
                      <span>Organisation</span>
                    </div>
                    <Image
                      src="/images/down.svg"
                      width={20}
                      height={20}
                      alt="building"
                      className={clsx(
                        "h-5 w-5 transition-transform",
                        open && "rotate-180"
                      )}
                    />
                  </div>
                </PopoverButton>
                <PopoverPanel>
                  <div className="flex flex-col px-4 py-3 rounded-md bg-white text-tricorn-black font-medium space-y-3 mt-3">
                    <RadioButton
                      label="Organisation 1"
                      type="radio"
                      id="org1"
                      htmlFor="org1"
                    />
                  </div>
                </PopoverPanel>
              </div>
            )}
          </Popover>
        </div>
        {/* Logout */}
        <div className="mt-4">
          <button className="w-full text-left text-akabeni font-medium flex items-center gap-2 pl-2">
            <figure>
              <Image
                src="/images/logout.svg"
                width={20}
                height={20}
                alt="log out image"
              />
            </figure>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDropDown;
