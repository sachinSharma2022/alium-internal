import React from "react";
import Image from "next/image";
const CheckBox = ({
  variant = "primary",
  size = "sm",
  icon = "/images/bi--check.svg",
  onChange,
  checked,
  customClass = "",
  text,
}) => {
  const baseStyle =
    "peer cursor-pointer appearance-none rounded transition-all duration-300 border-[1.6px]";

  const sizes = {
    sm: "w-5 h-5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const variants = {
    primary:
      "bg-white checked:bg-primary-blue checked:border-0 hover:border-primary border-borderPrimary",
    secondary: "bg-green-800 border-borderSecondary border",
  };
  return (
    <div>
      <label
        className={`inline-flex items-center relative gap-2 text-gray-dark cursor-pointer ${customClass}`}
      >
        <input
          type="checkbox"
          className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}
          onChange={onChange}
          checked={checked}
          id="check"
        />
        <span className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-[2px] -translate-y-1/2 pointer-events-none">
          <Image src={icon} alt="" width={16} height={16} />
        </span>
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
