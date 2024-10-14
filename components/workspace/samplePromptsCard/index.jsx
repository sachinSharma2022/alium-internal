import React from "react";
import Image from "next/image";

const SamplePromptsCard = () => {
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
      <div className="flex flex-col items-start gap-2 relative">
        <p className="relative mt-[-1.00px] font-semibold text-black text-base">
          Try one of our sample prompts
        </p>

        <div class="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          {card.map((item, index) => (
            <div
              key={index}
              class="flex flex-col items-start gap-2 px-4 py-3 h-[118px] overflow-hidden rounded-lg relative hover:bg-primary-red border hover:border-primary-blue  bg-white-smoke self-stretch  w-full"
            >
              <Image
                src="/images/sparkle.svg"
                width={20}
                height={20}
                alt="not found"
              />
              <p class=" self-stretch tracking-[0]  text-sm text-black font-medium overflow-hidden leading-5 text-ellipsis relative">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SamplePromptsCard;
