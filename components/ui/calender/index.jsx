"use client";
import React, { useState } from "react";
import Image from "next/image";
import RadioButton from "../radioButton";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import CheckBox from "../checkbox";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "../button";

const Calender = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Popover>
        {({ open }) => (
          <div className="popover">
            <PopoverButton className="flex items-center gap-2">
              <div className=" w-29 h-11 gap-2 bg-white p-3 rounded-md flex items-center justify-between  focus:outline-none pl-2 border border-borderPrimary">
                <div className="flex items-center gap-2 ">
                  <figure>
                    <Image
                      src="/images/calendar.svg"
                      width={20}
                      height={20}
                      alt="calendar"
                      className="min-w-5"
                    />
                  </figure>
                  <span className="font-medium text-base text-tricorn-black">
                    Today
                  </span>
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

            <PopoverPanel></PopoverPanel>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default Calender;
