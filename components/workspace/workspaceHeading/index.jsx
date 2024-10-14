import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const WorkspaceHeading = ({ heading, buttonText, icons, onClick }) => {
  return (
    <div className="bg-white-smoke mb-8 w-full">
      <div className="flex items-center justify-between p-8 bg-white mx-auto rounded-xl w-full">
        <div className="flex items-center gap-6">
          <h1 className="text-black-primary text-5xl">{heading}</h1>
          {icons.length > 0 && (
            <div className="flex items-center gap-3">
              {icons.map((item, index) => (
                <Button
                  key={index}
                  className="p-2 w-9 min-h-9 border border-borderPrimary rounded-md hover:bg-primary-red transition-all duration-300"
                >
                  <Image src={item} width={20} height={20} alt="not found" />
                </Button>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <Button onClick={onClick} variant="blueBtn" size="sm">
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
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeading;
