"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Table from "../ui/table";
import Filter from "../ui/filter";
import SearchPrimary from "../ui/searchPrimary";
import Calender from "../ui/calender";
import { Button } from "../ui/button";
import CopySurvey from "../modals/workspace/copySurvey";
import Dialog from "../ui/dialog";
import ModalTitle from "../ui/modalTitle";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <p className=" text-sm text-gray-500 font-medium">2024-08-30</p>
      ),
      "Last Changed by": (
        <p className=" text-sm text-gray-500 font-medium">Alium Admin</p>
      ),
      Status: (
        <span className="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold	 bg-red-100 dark:bg-red-300/30 dark:text-red-600">
          <span className="size-1.5 inline-block rounded-full bg-red-600 dark:bg-red-600"></span>
          Inactive
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <Button
            size="xs"
            className="w-[116px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Activate
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>
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
        <span className="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold bg-green-100	 text-green-500">
          <span class="size-1.5 inline-block rounded-full bg-green-500	 dark:bg-green-500"></span>
          Active
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <Button
            size="xs"
            className=" w-[116px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Deactivate
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>
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
        <span className="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold bg-green-100	 text-green-500">
          <span className="size-1.5 inline-block rounded-full bg-green-500	 dark:bg-green-500"></span>
          Active
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <Button
            size="xs"
            className=" w-[116px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Activate
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>
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
        <span className="justify-center min-w-24 inline-flex items-center gap-x-1.5 py-1.5 px-4	 rounded-full text-sm	 font-semibold	 bg-red-100 dark:bg-red-300/30 dark:text-red-600">
          <span className="size-1.5 inline-block rounded-full bg-red-600 dark:bg-red-600"></span>
          Inactive
        </span>
      ),
      Actions: (
        <div className="flex gap-4">
          <Button
            size="xs"
            className="w-[116px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Activate
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>
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
          <Button
            size="xs"
            className=" w-[116px] text-black-primary font-medium text-sm px-5 border border-borderPrimary rounded-md  text-center leading-none bg-white hover hover-secondary py-2	"
          >
            Deactivate
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/edit.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>

          <Button className="relative w-9 h-9 items-center p-2 border border-borderPrimary rounded-md bg-white hover hover-secondary">
            <Image
              src="/images/red-trash.svg"
              width={20}
              height={20}
              alt="not found"
            />
          </Button>
        </div>
      ),
    },
  ];

  // Array of Disclosure data
  const disclosureItems = [
    {
      title: "Survey Title 1",
      updated: "12 Aug 2024",
    },
    {
      title: "Survey Title 2",
      updated: "15 Aug 2024",
    },
    {
      title: "Survey Title 3",
      updated: "18 Aug 2024",
    },
    {
      title: "Survey Title 4",
      updated: "20 Aug 2024",
    },
  ];

  const FilterColumns = [
    { label: "Survey Title", sortable: true },
    { label: "Responses", sortable: true },
    { label: "Completion", sortable: true },
    { label: "Updated", sortable: true },
    { label: "", sortable: false },
    { label: "", sortable: false },
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

      <div className="table-container w-full">
        <table className="w-full table-filter">
          <tr className="flex px-6">
            {FilterColumns.map((column, index) => (
              <td
                key={index}
                className={`py-4 text-left text-gray-light text-base font-medium ${
                  column.label ? "flex" : ""
                }`}
              >
                <button className="flex gap-1 items-center">
                  {column.label}
                  {column.sortable && (
                    <Image
                      src="/images/sort-order-icon.svg"
                      width={12}
                      height={12}
                      alt="not found"
                    />
                  )}
                </button>
              </td>
            ))}
          </tr>
        </table>

        {/* Render Disclosure in a map */}
        <div className="disclosure-table-container w-full flex flex-col gap-4">
          {disclosureItems.map((item, index) => (
            <Disclosure
              key={index}
              className="bg-white px-6 rounded-xl w-full"
              as="div"
              defaultOpen={false}
            >
              {({ open }) => (
                <div>
                  <Disclosure.Button className="w-full flex items-center justify-between text-black-primary rounded-xl min-h-16">
                    <table className="disclosure-table w-full">
                      <tbody>
                        <tr className="flex items-center">
                          <td className="gap-3 flex items-center text-gray-light text-start text-sm">
                            <span className="w-10 flex items-center justify-center bg-red-200 text-pink-500 font-semibold py-2.5 px-2 rounded-full">
                              ST
                            </span>
                            <p className="text-black-primary text-base font-semibold">
                              {item.title}
                            </p>
                          </td>
                          <td className="text-left text-base text-gray-light">
                            12
                          </td>
                          <td className="text-left text-base text-gray-light">
                            89%
                          </td>
                          <td className="text-left text-base text-gray-light">
                            {item.updated}
                          </td>
                          <td className="text-gray-light px-6 text-start text-sm">
                            <div className="flex gap-4">
                              <Button className="w-9 min-h-9 bg-white rounded-md hover hover-secondary !border-none hover:border-none">
                                <Image
                                  src="/images/file-text.svg"
                                  width={20}
                                  height={20}
                                  alt="not found"
                                />
                              </Button>

                              <Button
                                onClick={openModal}
                                className="w-9 min-h-9 bg-white rounded-md hover hover-secondary !border-none hover:border-none"
                              >
                                <Image
                                  src="/images/copy.svg"
                                  width={20}
                                  height={20}
                                  alt="not found"
                                />
                              </Button>

                              <Button className="w-9 min-h-9 bg-white rounded-md hover hover-secondary !border-none hover:border-none">
                                <Image
                                  src="/images/edit.svg"
                                  width={20}
                                  height={20}
                                  alt="not found"
                                />
                              </Button>

                              <Button className="w-9 min-h-9 bg-white rounded-md hover hover-secondary !border-none hover:border-none">
                                <Image
                                  src="/images/trash.svg"
                                  width={20}
                                  height={20}
                                  alt="not found"
                                />
                              </Button>
                            </div>
                          </td>
                          <td className="flex justify-end items-center ml-auto mr-0">
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Disclosure.Button>

                  <Disclosure.Panel className="bg-gray-table-bg rounded-xl mt-3">
                    <Table columns={columns} data={data} />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      <Dialog modalWidth="max-w-[620px]" isOpen={isOpen} onClose={closeModal}>
        <ModalTitle backHandler={closeModal}>Copy Survey</ModalTitle>
        <CopySurvey backHandler={true} />
      </Dialog>
    </section>
  );
};

export default Accordion;
