"use client";
import React from "react";
import Image from "next/image";
import AdminDropDown from "@/components/ui/adminDropDown";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="px-6 border-b border-borderPrimary bg-white">
          <div className="flex flex-col gap-4 xmd:gap-0 xmd:flex-row  items-center h-auto lg:h-[5.75rem] py-6 lg:py-0 justify-between">
            {/* left  */}
            <div className="flex items-center">
              <figure>
                <Link href="/">
                  <Image
                    src="/images/alium-logo.svg"
                    width={288}
                    height={44}
                    layout="responsive"
                  />
                </Link>
              </figure>
            </div>
            {/* Right  */}
            <div className="flex items-center gap-6 relative">
              {/* Notification Icon  */}

              <button
                type="button"
                class="relative inline-flex items-center p-3 text-white"
              >
                <Image src="/images/bell.svg" width={24} height={24} />

                <div class="absolute inline-flex items-center justify-center w-[0.875rem] h-[0.875rem] text-[0.625rem] font-bold text-white bg-primary-blue border-2 border-white p-2 rounded-full top-1 right-1">
                  2
                </div>
              </button>
              {/* Admin  */}
              <div className="flex items-center gap-4">
                {/* Admin Name  */}
                <div className="text-end">
                  <h6 className="font-bold text-black-primary">John Doe</h6>
                  <small className="text-sm font-medium text-black-primary opacity-60">
                    Admin
                  </small>
                </div>
                {/* Admin Image  */}
                <div>
                  <Image
                    src="/images/user-image.svg"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                {/* DropDown  */}
                <Menu>
                  <MenuButton>
                    <Image src="/images/down.svg" width={20} height={20} />
                  </MenuButton>
                  <MenuItems anchor="bottom">
                    <MenuItem>
                      <div className="mr-5 mt-6">
                        <AdminDropDown />
                      </div>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
