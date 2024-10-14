import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NoWorkspaceAvailable = () => {
  const card = [
    {
      text: "Project Proposal Survey collects detailed project ideas, objectives, timelines, and resource requirements from team members",
    },

    {
      text: "Event Feedback Form to gather attendee insights and improve future events",
    },
    {
      text: "Feature Request Quiz Identify user needs by prioritizing desired features and understanding their impact on user experience",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full items-center top-0 gap-6 relative">
        <Image
          src="/images/emptystate.svg"
          width={240}
          height={290}
          alt="emptystate"
        />
        <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
          <div className=" mt-[-1.00px] font-semibold text-black text-2xl text-center ">
            No workspace available
          </div>
          <p className="  opacity-60 font-normal text-black text-base text-center ">
            Please create a workspace to get started
          </p>
        </div>
        <div className="inline-flex items-center gap-3 px-6 py-3 relative flex-[0_0_auto] rounded-lg overflow-hidden">
          <Button variant="blueBtn" size="sm">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2332_41968)">
                  <path
                    d="M12 5V19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2332_41968">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Add New Survey
          </Button>
        </div>
      </div>
    </>
  );
};

export default NoWorkspaceAvailable;
