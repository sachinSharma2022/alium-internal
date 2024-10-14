"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dialog from "@/components/ui/dialog";
import CreateWorkspace from "@/components/modals/workspace/CreateWorkspace";
import ModalTitle from "@/components/ui/modalTitle";

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

            <div>
              <Image
                src="/images/more.svg"
                width={20}
                height={20}
                alt="not found"
              />
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
        <ModalTitle backHandler={closeModal}>Create a new workspace</ModalTitle>
          <CreateWorkspace backHandler={true} />
        </Dialog>
      </div>
    </aside>
  );
};

export default SideBar;
