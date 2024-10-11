import React from "react";
import Image from "next/image";

const ToolTip = ({children, variant='primary', position='right', icon}) => {

  const baseStyle = "absolute z-10 rounded  max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out"

  const variants ={
    primary:"text-white bg-tooltipbg shadow3 text-sm p-4",
  }
  const positions ={
    top:"top-0 bottom-0",
    right:"top-0 left-9",
  }

  return (
    <div className="relative group w-full">
      <Image
        className="ml-2"
        src={icon}
        width={20}
        height={20}
      />

      <div className={`${baseStyle} ${variants[variant]} ${positions[position]}`}>
       {children}
      </div>
    </div>
  );
};

export default ToolTip;
