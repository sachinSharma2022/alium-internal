import { Fragment } from "react";
import { Menu, Transition, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const links = [
  { href: "", label: "WorkSpace 1" },
  { href: "", label: "WorkSpace 2" },
  { href: "", label: "WorkSpace 3" },
];

const Dropdown = ({ className = "", label, showTooltip, workspace }) => {
  return (
    <>
      <label className="mb-[6px] font-semibold text-black flex items-center">
        <span className="shrink-0">{label}</span>
        {showTooltip && (
          <ToolTip icon="/images/info-circle.svg">
            <p>
              {" "}
              Note: Use at least 8 characters. Don’t use a password from another
              site, or something obvious like your pet’s name.
            </p>
          </ToolTip>
        )}
      </label>

      <div className="w-full text-right">
        <Menu as="div" className="relative  w-full inline-block text-left">
          <div>
            <Menu.Button className=" w-full  flex items-center justify-between bg-white border border-borderPrimary text-black opacity-60  font-medium	h-[2.75rem] text-base rounded-lg  px-4 py-2   focus:outline-none ">
              Select
              <Image
                src="/images/down.svg"
                width={16}
                height={16}
                alt="not found"
                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute w-full p-3 z-40 bg-white border border-borderPrimary text-black right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg focus:outline-none">
              {workspace && (
                <div className="flex items-center gap-3 px-4 py-3 mb-3 relative bg-primary-white rounded border border-dashed border-primary-blue cursor-pointer">
                  <Image
                    src="/images/plus-blue.svg"
                    width={20}
                    height={20}
                    alt="not found"
                  />
                  <div className="relative w-fit mt-[-0.50px]  font-semibold text-primary-blue text-base whitespace-nowrap">
                    Add New Workplace
                  </div>
                </div>
              )}

              {links.map((link) => (
                <MenuItem
                  key={link.href}
                  className="block data-[focus]:bg-primary-red p-3 rounded"
                >
                  <a className="font-semibold text-base" href={link.href}>
                    {link.label}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default Dropdown;
