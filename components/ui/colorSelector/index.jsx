"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "../button";

const ColorSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const colorPalette = [
    {
      color: "#00B8D9",
    },
    {
      color: "#FFAB00",
    },
    {
      color: "#36B37E",
    },

    {
      color: "#BA5CC3",
    },
    {
      color: "#9CEF75",
    },
    {
      color: "#E58585",
    },

    {
      color: "#F94DBF",
    },
    {
      color: "#8B94ED",
    },
    {
      color: "#F7EA79",
    },

    {
      color: "#96EAFD",
    },
    {
      color: "#CFCFCF",
    },
    {
      color: "#EB8",
    },
  ];

  return (
    <div className="relative">
      <Popover>
        {({ open }) => (
          <div className="popover">
            <PopoverButton className="flex items-center gap-2">
              <div className=" w-[72px] h-11 gap-1 bg-white p-3 rounded-md flex items-center justify-between  focus:outline-none  border border-borderPrimary">
                <div className="flex items-center gap-1 ">
                  <figure>
                    <Image
                      src="/images/green-ellipse.svg"
                      width={15}
                      height={15}
                      alt="filter"
                    />
                  </figure>
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
              <div className="absolute w-[335px] max-w-[335px] pt-4 flex gap-5 bg-white mt-2 p-5 shadow1 rounded-lg z-30 border border-borderPrimary flex-wrap">
                {colorPalette.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-md border-none hover flex items-center justify-center hover-secondary w-[32px] h-[32px] cursor-pointer"
                  >
                    <span
                      className="w-[15px] h-[15px]  inline-block rounded-3xl	 "
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default ColorSelector;
