"use client";
import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Table from "../table";
import Filter from "../ui/filter";
import SearchPrimary from "../ui/searchPrimary";
import Calender from "../ui/calender";

const Accordian = () => {
  const columns = [
    "Survey Type",
    "Create Date",
    "Last Changed by",
    "Status",
    "Actions",
  ];

  const data = [
    {
      "Survey Type": (
        <div className="flex gap-3">
          <Image
            src="/images/device-laptop.svg"
            width={20}
            height={20}
            alt="not found"
          />
          <p className="text-black-primary font-medium text-sm">Web Survey</p>
        </div>
      ),
      "Create Date": (
        <p className="  text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className="  text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span class="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold	 bg-red-100 dark:bg-red-300/30 dark:text-red-600">
          <span class="size-1.5 inline-block rounded-full bg-red-600 dark:bg-red-600"></span>
          Inactive
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class="min-w-28 text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Activate
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      "Survey Type": (
        <div className="flex gap-3">
          <Image
            src="/images/mail.svg"
            width={20}
            height={20}
            alt="not found"
          />
          <p className="text-black-primary font-medium text-sm">
            Link/Email Survey
          </p>
        </div>
      ),
      "Create Date": (
        <p className="  text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className="  text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span class="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold bg-green-100	 text-green-500">
          <span class="size-1.5 inline-block rounded-full bg-green-500	 dark:bg-green-500"></span>
          Active
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class=" min-w-28	text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md block text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Deactivate
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/mail.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      "Survey Type": (
        <div className="flex gap-3">
          <Image
            src="/images/page.svg"
            width={14}
            height={14}
            alt="not found"
          />
          <p className="text-black-primary font-medium text-sm">
            In-Page Survey
          </p>
        </div>
      ),
      "Create Date": (
        <p className="  text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className="  text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span class="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold bg-green-100	 text-green-500">
          <span class="size-1.5 inline-block rounded-full bg-green-500	 dark:bg-green-500"></span>
          Active
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class=" min-w-28	text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md block text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Deactivate
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/mail.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },

    {
      "Survey Type": (
        <div className="flex gap-3">
          <Image
            src="/images/copy.svg"
            width={20}
            height={20}
            alt="not found"
          />
          <p className="text-black-primary font-medium text-sm">
            Pop up Survey
          </p>
        </div>
      ),
      "Create Date": (
        <p className="  text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className="  text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span class="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold	 bg-red-100 dark:bg-red-300/30 dark:text-red-600">
          <span class="size-1.5 inline-block rounded-full bg-red-600 dark:bg-red-600"></span>
          Inactive
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class=" min-w-28	text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md block text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Activate
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/mail.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>
        </div>
      ),
    },
    {
      "Survey Type": (
        <div className="flex gap-3">
          <Image
            src="/images/apps.svg"
            width={20}
            height={20}
            alt="not found"
          />
          <p className="text-black-primary font-medium text-sm">App Survey</p>
        </div>
      ),
      "Create Date": (
        <p className="  text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className="  text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span class="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold bg-green-100	 text-green-500">
          <span class="size-1.5 inline-block rounded-full bg-green-500	 dark:bg-green-500"></span>
          Active
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <button
            type="button"
            class=" min-w-28	text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md block text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Deactivate
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </button>

          <button
            type="button"
            class="relative items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary"
          >
            <Image
              src="/images/mail.svg"
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
    <section className="w-full bg-white-smoke">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <Filter />
          <Calender />
        </div>

        <SearchPrimary
          variant="secondary"
          placeholder="Search"
          icon="/images/search-light.svg"
        />
      </div>

      <div className="w-full">
        <Disclosure
          className="bg-white px-6 py-3 rounded-xl"
          as="div"
          defaultOpen={true}
        >
          <Disclosure.Button className="w-full flex items-center justify-between text-black-primary rounded-xl">
            <table className="w-full">
              <tbody>
                <tr>
                  <td class="gap-3 flex items-center text-gray-light font-medium text-start text-sm py-2  rounded-tl-xl">
                    <span className=" w-10 flex items-center justify-center bg-red-200 text-pink-500 font-semibold  py-2.5 px-2 rounded-full	">
                      ST
                    </span>
                    <p className="text-black-primary text-base font-semibold	">
                      Survey Title 1
                    </p>
                  </td>
                  <td class=" py-2 px-10 text-left w-[14%]">-</td>
                  <td class=" py-2 px-10 text-left w-[14%]">-</td>
                  <td class="py-2 px-6">
                    <p className="text-gray-light font-medium  text-start text-sm">
                      12 Aug 2024
                    </p>
                  </td>
                  <td class="text-gray-light font-medium py-2 px-6 text-start text-sm rounded-tr-xl">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        class="p-2 bg-white rounded-md hover hover-secondary border-none hover:border-none"
                      >
                        <Image
                          src="/images/file-text.svg"
                          width={20}
                          height={20}
                          alt="not found"
                        />
                      </button>

                      <button
                        type="button"
                        class="p-2 bg-white rounded-md hover hover-secondary border-none hover:border-none"
                      >
                        <Image
                          src="/images/copy.svg"
                          width={20}
                          height={20}
                          alt="not found"
                        />
                      </button>

                      <button
                        type="button"
                        class="p-2 bg-white rounded-md hover hover-secondary border-none hover:border-none"
                      >
                        <Image
                          src="/images/edit.svg"
                          width={20}
                          height={20}
                          alt="not found"
                        />
                      </button>

                      <button
                        type="button"
                        class="p-2 bg-white rounded-md hover hover-secondary border-none hover:border-none"
                      >
                        <Image
                          src="/images/trash.svg"
                          width={20}
                          height={20}
                          alt="not found"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </Disclosure.Button>
          <Disclosure.Panel className="bg-gray-table-bg rounded-xl mt-3">
            <Table columns={columns} data={data} />
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </section>
  );
};

export default Accordian;