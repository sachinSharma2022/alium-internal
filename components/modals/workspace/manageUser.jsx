import React from "react";
import { Button } from "../../ui/button";
import Dropdown from "../../ui/dropdown";
import SearchPrimary from "../../ui/searchPrimary";
import Table from "../../table";
import Image from "next/image";

const ManageUser = () => {
  const columns = ["Title", "Email", "Role", "Actions"];

  const data = [
    {
      Title: (
        <div class="gap-3 flex items-center text-gray-light font-medium text-start text-sm py-2  rounded-tl-xl">
          <span className=" w-10 flex items-center justify-center bg-red-100 text-pink-500 font-semibold  py-2.5 px-2 rounded-full	">
            JD
          </span>
          <p className="text-black-primary text-base font-semibold	">John Doe</p>
        </div>
      ),
      Email: (
        <p className="  text-sm text-gray-500 font-medium">johndoe@email.com</p>
      ),
      Role: <p className="  text-sm text-gray-500 font-medium">Admin</p>,

      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class="relative items-center border-none p-2 rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/more.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      Title: (
        <div class="gap-3 flex items-center text-gray-light font-medium text-start text-sm py-2  rounded-tl-xl">
          <span className=" w-10 flex items-center justify-center bg-red-100 text-pink-500 font-semibold  py-2.5 px-2 rounded-full	">
            JD
          </span>
          <p className="text-black-primary text-base font-semibold	">John Doe</p>
        </div>
      ),
      Email: (
        <p className="  text-sm text-gray-500 font-medium">johndoe@email.com</p>
      ),
      Role: <p className="  text-sm text-gray-500 font-medium">Viewer</p>,

      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class="relative items-center border-none p-2 rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/more.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      Title: (
        <div class="gap-3 flex items-center text-gray-light font-medium text-start text-sm py-2  rounded-tl-xl">
          <span className=" w-10 flex items-center justify-center bg-red-100 text-pink-500 font-semibold  py-2.5 px-2 rounded-full	">
            JD
          </span>
          <p className="text-black-primary text-base font-semibold	">John Doe</p>
        </div>
      ),
      Email: (
        <p className="  text-sm text-gray-500 font-medium">johndoe@email.com</p>
      ),
      Role: <p className="  text-sm text-gray-500 font-medium">Admin</p>,

      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class="relative items-center border-none p-2 rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/more.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      Title: (
        <div class="gap-3 flex items-center text-gray-light font-medium text-start text-sm py-2  rounded-tl-xl">
          <span className=" w-10 flex items-center justify-center bg-red-100 text-pink-500 font-semibold  py-2.5 px-2 rounded-full	">
            JD
          </span>
          <p className="text-black-primary text-base font-semibold	">John Doe</p>
        </div>
      ),
      Email: (
        <p className="  text-sm text-gray-500 font-medium">johndoe@email.com</p>
      ),
      Role: <p className="  text-sm text-gray-500 font-medium">Viewer</p>,

      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class="relative items-center border-none p-2 rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/more.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-6 mb-6">
        <div className="w-full">
          <SearchPrimary
            variant="primary"
            placeholder="Search users"
            icon="/images/search-light.svg"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Dropdown />
        </div>
      </div>

      <div className="max-h-[290px] overflow-y-scroll overflow-hidden">
        <Table columns={columns} data={data} />
      </div>

      <div class="border-b border-grey-700 pt-6 mb-6"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Send Invite
        </Button>
      </div>
    </>
  );
};

export default ManageUser;
