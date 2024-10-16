"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dialog from "@/components/ui/dialog";
import CreateWorkspace from "@/components/modals/workspace/CreateWorkspace";
import ModalTitle from "@/components/ui/modalTitle";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";

const sideItems = [
  {
    icon: "chart-pie.svg",
    sideMenu: "Dashboard",
  },
  {
    icon: "report.svg",
    sideMenu: "Reports",
  },
  {
    icon: "settings.svg",
    sideMenu: "Settings",
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <aside className="bg-white w-[22em]">
      <div className="flex flex-col h-[calc(100vh-5.80rem)] justify-between p-6">
        {/* Workspace  */}
        <div className="flex flex-col gap-4">
          {/* Workspace Added  */}
          <div className="flex items-center justify-between px-5 py-4 h-[3.5rem] hover:bg-primary-red hover:rounded-lg transition-all duration-300 group">
            <div>
              <Link href="#" className="flex items-center gap-4">
                <figure>
                  <Image
                    className="opacity-60"
                    src="/images/workspaceimg.svg"
                    width={24}
                    height={24}
                    alt="workspace image"
                  />
                </figure>
                <span className="font-medium text-gray-light text-xl group-hover:text-primary-blue group-hover:font-semibold">
                  Workspaces
                </span>
              </Link>
            </div>
            <div>
              <Link href="#" onClick={openModal}>
                <Image
                  src="/images/plus.svg"
                  width={24}
                  height={24}
                  alt="not found"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between px-5 py-3 h-[2.75rem] hover:bg-white-smoke hover:rounded-lg transition-all duration-300 group">
            <div>
              <Link href="#" className="flex items-center gap-4">
                <figure>
                  <Image
                    className="opacity-60"
                    src="/images/orange-ellipse.svg"
                    width={8}
                    height={8}
                    alt="workspace image"
                  />
                </figure>
                <span className="font-medium text-gray-light text-base group-hover:text-black group-hover:font-semibold">
                  Workspaces (1)
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between px-5 py-3 h-[2.75rem] hover:bg-white-smoke hover:rounded-lg transition-all duration-300 group">
            <div>
              <Link href="#" className="flex items-center gap-4">
                <figure>
                  <Image
                    className="opacity-60"
                    src="/images/green-ellipse.svg"
                    width={8}
                    height={8}
                    alt="workspace image"
                  />
                </figure>

                <span className="font-medium text-gray-light text-base group-hover:text-black group-hover:font-semibold">
                  Workspaces (4)
                </span>
              </Link>
            </div>

            <div className="relative">
              <Popover>
                {({ open }) => (
                  <div className="popover">
                    <PopoverButton className="flex items-center gap-2">
                      <Image
                        src="/images/more.svg"
                        width={20}
                        height={20}
                        alt="filter"
                        className="min-w-5"
                      />
                    </PopoverButton>

                    <PopoverPanel>
                      <div className="absolute w-[120px]  pt-3  flex flex-col gap-3 bg-white px-3 mt-2 pb-4 shadow1 border border-borderPrimary rounded-lg z-30">
                        <span className="w-full text-center text-tricorn-black text-base font-medium pb-3 border-b border-borderPrimary flex items-center cursor-pointer">
                          Rename
                        </span>

                        <span className="w-full text-center text-tricorn-black text-base font-medium pb-3 border-b border-borderPrimary flex items-center cursor-pointer">
                          Leave
                        </span>

                        <span className="w-full text-center text-akabeni text-base font-medium flex items-center cursor-pointer">
                          Delete
                        </span>
                      </div>
                    </PopoverPanel>
                  </div>
                )}
              </Popover>
            </div>
          </div>

          <div className="flex items-center justify-between px-5 py-3 h-[2.75rem] hover:bg-white-smoke hover:rounded-lg transition-all duration-300 group">
            <div>
              <Link href="#" className="flex items-center gap-4">
                <figure>
                  <Image
                    className="opacity-60"
                    src="/images/blue-ellipse.svg"
                    width={8}
                    height={8}
                    alt="workspace image"
                  />
                </figure>
                <span className="font-medium text-gray-light text-base group-hover:text-black group-hover:font-semibold">
                  Workspaces (0)
                </span>
              </Link>
            </div>
          </div>

          {/* Dashboard, Reports, Settings  */}
          {sideItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-4 h-[3.5rem] hover:bg-primary-red hover:rounded-lg transition-all duration-300 group"
            >
              <div>
                <Link href="#" className="flex items-center gap-4" key={index}>
                  <figure>
                    <Image
                      className="opacity-60"
                      src={`/images/${item.icon}`}
                      width={24}
                      height={24}
                      alt="workspace image"
                    />
                  </figure>
                  <span className="font-medium text-gray-light text-xl group-hover:text-primary-blue group-hover:font-semibold">
                    {item.sideMenu}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* help & Support  */}
        <div className="bg-white-smoke rounded-xl p-6">
          <div className="flex flex-col items-center gap-3">
            <Link href="#" className="font-bold paragraph-2 text-black-primary">
              Support 24/7
            </Link>
            <Link href="#" className="font-medium text-gray-light">
              Contact us anytime
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="font-bold text-black-primary px-8 py-3 border border-borderPrimary rounded-lg block text-center bg-white mt-6 hover hover-secondary"
            >
              Help & Support
            </Link>
          </div>
        </div>

        <Dialog isOpen={isOpen} onClose={closeModal}>
          <ModalTitle backHandler={closeModal}>
            Create a new workspace
          </ModalTitle>
          <CreateWorkspace backHandler={true} />
        </Dialog>
      </div>
    </aside>
  );
};

export default SideBar;
