import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WorkspaceIsEmpty = () => {
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
      <div className="flex flex-col items-center gap-3 relative">
        <Image
          src="/images/emptybox.svg"
          width={228}
          height={180}
          alt="emptybox"
        />
        <div className="w-[528px] items-center gap-5 flex flex-col relative flex-[0_0_auto]">
          <div className="items-start gap-4 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px]  font-semibold text-black text-2xl text-center tracking-[0]">
              Your Workspace is Empty
            </div>
          </div>
          <div className="flex items-center">
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
      </div>
    </>
  );
};

export default WorkspaceIsEmpty;
