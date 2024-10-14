"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "../button";

const ColorSelector = () => {
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
              <div className="absolute w-[330px] pt-4 flex gap-5 bg-white mt-2 p-5 shadow1 rounded-lg z-30 border border-borderPrimary">
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/blue-ellipse.svg"
                    width={15}
                    height={15}
                    alt="blue"
                    className="min-w-4"
                  />
                </Button>
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/orange-ellipse.svg"
                    width={15}
                    height={15}
                    alt="orange"
                    className="min-w-4"
                  />
                </Button>
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/green-ellipse.svg"
                    width={15}
                    height={15}
                    alt="green"
                    className="min-w-4"
                  />
                </Button>
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/blue-ellipse.svg"
                    width={15}
                    height={15}
                    alt="blue"
                    className="min-w-4"
                  />
                </Button>
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/orange-ellipse.svg"
                    width={15}
                    height={15}
                    alt="orange"
                    className="min-w-4"
                  />
                </Button>
                <Button
                  type="button"
                  class="relative items-center p-2 rounded-md border-none bg-white hover hover-secondary"
                >
                  <Image
                    src="/images/green-ellipse.svg"
                    width={15}
                    height={15}
                    alt="green"
                    className="min-w-4"
                  />
                </Button>
              </div>
            </PopoverPanel>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default ColorSelector;
