"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Dialog from "@/components/ui/dialog";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ModalTitle from "@/components/ui/modalTitle";
import StartFromScratchSurvey from "@/components/modals/workspace/startFromScratchSurvey";
import CreateWithAISurvey from "@/components/modals/workspace/createWithAISurvey";
import GeneratingYourResults from "@/components/modals/workspace/generatingYourResults";
import InviteUser from "@/components/modals/workspace/inviteUser";
import ManageUser from "@/components/modals/workspace/manageUser";
import DeleteWorkspace from "@/components/modals/workspace/deleteWorkspace";
import { Button } from "@/components/ui/button";

const AddNewSurvery = ({ backHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className=" bg-white flex flex-col w-full items-start justify-center gap-5 p-8 relative bg-primary-white rounded-xl overflow-hidden">
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] rounded-lg overflow-hidden">
          <div className="relative w-fit mt-[-1.50px]  whitespace-nowrap">
            <Button
              variant="none"
              onClick={backHandler}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/arrow-left.svg"
                width={20}
                height={20}
                alt="workspace image"
              />

              <span className="font-semibold text-primary text-base tracking-[0] leading-6 text-primary-blue">
                Go Back
              </span>
            </Button>
          </div>
        </div>
        <p className="relative w-fit  text-black-primary font-semibold  text-2xl tracking-[0] leading-[normal]">
          Select an Option to Add Content
        </p>
        <div className="flex h-[264px] items-center gap-6 relative self-stretch w-full">
          <div
            onClick={openModal}
            className="flex flex-col items-center justify-center gap-6 px-[60px] py-4 relative flex-1 self-stretch grow bg-primary-hover-light rounded-xl overflow-hidden border border-solid border-primary-blue bg-primary-red cursor-pointer	 "
          >
            <Image
              src="/images/scratch button.svg"
              width={64}
              height={64}
              alt="not found"
              className="relative"
            />
            <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-black-primary text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Start from scratch
              </div>
              <p className="relative w-[182px] opacity-60  font-medium text-black-primary text-base text-center tracking-[0] leading-6">
                Build from a list of available content types
              </p>
            </div>
          </div>
          <div
            onClick={openModal}
            className="flex flex-col items-center justify-center gap-6 px-[60px] py-4 relative flex-1 self-stretch grow bg-pink-100 rounded-xl overflow-hidden border border-solid border-pink-600 cursor-pointer	"
          >
            <Image
              src="/images/ai-button.svg"
              width={64}
              height={64}
              alt="not found"
              className="relative"
            />
            <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px]  font-bold text-black-primary text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Create with AI
              </div>
              <p className="relative w-[216px] opacity-60	font-medium text-black-primary text-base text-center tracking-[0] leading-6">
                Generate custom questions with AI and get inspired
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Survey */}

      <Dialog modalWidth="max-w-[620px]" isOpen={isOpen} onClose={closeModal}>
        <ModalTitle backHandler={closeModal}>Create New Survey</ModalTitle>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <TabGroup>
              <TabList className="flex gap-4 mb-6 border-b border-gray-200">
                <Tab className="pb-3 px-0 text-base font-semibold text-grey focus:outline-none data-[selected]:border-b-4 data-[selected]:text-black border-primary-blue data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                  Start from Scratch
                </Tab>
                <Tab className="pb-3 px-0 text-base font-semibold text-grey focus:outline-none data-[selected]:border-b-4 data-[selected]:text-black border-primary-blue data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                  Create with AI
                </Tab>
              </TabList>

              <TabPanels className="mt-3">
                <TabPanel className="rounded-xl bg-white/5">
                  <StartFromScratchSurvey backHandler={true} />
                </TabPanel>
                <TabPanel className="rounded-xl bg-white/5">
                  <CreateWithAISurvey backHandler={true} />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </Dialog>

      {/* Generating Your Results */}

      {/* <Dialog
        className="max-h-[620px]"
        modalWidth="max-w-[620px]"
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ModalTitle backHandler={closeModal}>
          Generating Your Results
        </ModalTitle>
        <GeneratingYourResults />
      </Dialog> */}

      {/* Invite User */}
      
      {/* <Dialog className="max-h-[620px]" modalWidth="max-w-[620px]" isOpen={isOpen} onClose={closeModal}>
        <ModalTitle backHandler={closeModal}>Invite User</ModalTitle>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <TabGroup>
              <TabList className="flex gap-4 mb-6 border-b border-gray-200">
                <Tab className="pb-3 px-0 text-base font-semibold text-grey focus:outline-none data-[selected]:border-b-4 data-[selected]:text-black border-primary-blue data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                Invite User
                </Tab>
                <Tab className="pb-3 px-0 text-base font-semibold text-grey focus:outline-none data-[selected]:border-b-4 data-[selected]:text-black border-primary-blue data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
                Manage User
                </Tab>
              </TabList>

              <TabPanels className="mt-3">
                <TabPanel className="rounded-xl bg-white/5">
                  <InviteUser backHandler={true} />
                </TabPanel>
                <TabPanel className="rounded-xl bg-white/5">
                  <ManageUser backHandler={true} />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </Dialog> */}

      {/* Delete Workspace? */}
      {/* <Dialog isOpen={isOpen} onClose={closeModal}>
        <ModalTitle backHandler={closeModal}>Notification</ModalTitle>
        <DeleteWorkspace backHandler={true} />
      </Dialog> */}
    </>
  );
};

export default AddNewSurvery;
