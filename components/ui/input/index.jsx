import React from "react";
import ToolTip from "../tooltip";

const InputField = ({
  className = "",
  label,
  id,
  type = "text",
  placeholder,
  showTooltip = false,
  required = false,
  value, // Add value prop
  onChange, // Add onChange prop
}) => {
  return (
    <>
      <label className="mb-[6px] font-semibold text-black flex items-center">
        <span className="shrink-0">{label}</span>
        {showTooltip && (
          <ToolTip icon="/images/info-circle.svg">
            <p>
              {" "}
              Note: Use at least 8 characters. Don’t use a password from another
              site, or something obvious like your pet’s name.
            </p>
          </ToolTip>
        )}
      </label>
      <div>
        <input
          type={type}
          id={id}
          className={`bg-white border border-borderPrimary text-black h-[2.75rem] text-base font-semibold rounded-lg block w-full py-3 px-4 dark:placeholder-gray-light placeholder:font-normal focus:outline-none ${className}`}
          placeholder={placeholder}
          required={required}
          value={value} // Set the value prop
          onChange={onChange} // Call the onChange prop
        />
      </div>
    </>
  );
};

export default InputField;
