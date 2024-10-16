"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import CheckBox from "../checkbox";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "../button";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import InputField from "../input";

const Filter = () => {
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
              <div className=" w-28 h-11 gap-2 bg-white p-3 rounded-md flex items-center justify-between  focus:outline-none pl-2 border border-borderPrimary">
                <div className="flex items-center gap-2 ">
                  <figure>
                    <Image
                      src="/images/filter.svg"
                      width={20}
                      height={20}
                      alt="filter"
                      className="min-w-5"
                    />
                  </figure>
                  <span className="font-medium text-base text-tricorn-black">
                    Filter
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

            <PopoverPanel>
              <div className="absolute w-[14.5rem] pt-4 flex flex-col gap-3 bg-white px-3 mt-2 pb-4 shadow1 border border-borderPrimary rounded-lg z-30">
                <Disclosure
                  className=" border-b border-borderPrimary pb-2"
                  as="div"
                  defaultOpen={false}
                >
                  <Disclosure.Button className="w-full text-left text-tricorn-black font-medium  flex gap-2 pl-2 items-center">
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                    Active
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-gray-table-bg rounded-xl ">
                    <ul class="bg-white-smoke rounded-lg px-3 py-3 mt-3">
                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="All"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Draft"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Active"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Inactive"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Deleted"
                          customClass="font-medium"
                        />
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Disclosure>

                <Disclosure
                  className=" border-b border-borderPrimary pb-2"
                  as="div"
                  defaultOpen={false}
                >
                  <Disclosure.Button className="w-full text-left text-tricorn-black font-medium  flex gap-2 pl-2 items-center">
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                    Survey Type
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-gray-table-bg rounded-xl ">
                    <ul class="bg-white-smoke rounded-lg px-3 py-3 mt-3">
                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="All"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Web Survey"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Email/Link Survey"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="In-Page Survey"
                          customClass="font-medium"
                        />
                      </li>

                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="Popup Survey"
                          customClass="font-medium"
                        />
                      </li>
                      <li class="flex items-center">
                        <CheckBox
                          size="sm"
                          text="App Survey"
                          customClass="font-medium"
                        />
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Disclosure>

                <Disclosure
                  className=" border-b border-borderPrimary pb-2"
                  as="div"
                  defaultOpen={false}
                >
                  <Disclosure.Button className="w-full text-left text-tricorn-black font-medium  flex gap-2 pl-2 items-center">
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                    Response Count
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-gray-table-bg rounded-xl ">
                    <ul class="bg-white-smoke rounded-lg px-3 py-3 mt-3">
                      <div className="custom-range-slider">
                        <RangeSlider />
                        <div className="flex justify-between items-center pt-2">
                          <span class="text-xs font-medium text-gray-500">
                            0
                          </span>
                          <span class="text-xs font-medium text-gray-500">
                            +1000
                          </span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <InputField
                            inputHeight="h-[32px]"
                            inputWidth="w-[69px]"
                          />
                          <span className="text-gray-500 font-medium">-</span>
                          <InputField
                            inputHeight="h-[32px]"
                            inputWidth="w-[69px]"
                          />
                        </div>
                      </div>
                    </ul>
                  </Disclosure.Panel>
                </Disclosure>

                <div className="flex items-center justify-between">
                  <Button class=" min-w-[96px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2		">
                    Clear All
                  </Button>

                  <Button class=" min-w-[96px] text-white font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-primary-blue hover hover-bg-primary-blue py-2	">
                    Apply
                  </Button>
                </div>
              </div>
            </PopoverPanel>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default Filter;
