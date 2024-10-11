import React from "react";
import Image from "next/image";
const SearchPrimary = ({
  icon,
  variant = "primary",
  placeholder,
  iconPosition = "left-12",
  className,
}) => {
  const baseStyle =
    "rounded-lg h-[2.75rem] focus:outline-none placeholder:text-base py-3 block text-black-primary";
  const variants = {
    primary:
      "pl-12 pr-4 bg-white-smoke w-full md:w-[21.5rem] placeholder:text-shark-fin placeholder:font-medium",
    secondary:
      "pr-5 pl-[2.6rem] border border-borderPrimary bg-white w-[16.25rem] placeholder:font-normal",
  };
  const iconPositions = {
    "left-12": "start-3",
    "left-20": "start-5",
  };
  return (
    <form className="">
      <div className={`relative ${className}`}>
        <div
          className={`absolute inset-y-0 flex items-center pointer-events-none ${iconPositions[iconPosition]}`}
        >
          <Image src={icon} alt="search icon" width={20} height={20} />
        </div>
        <input
          type="search"
          className={`${baseStyle} ${variants[variant]}`}
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default SearchPrimary;
