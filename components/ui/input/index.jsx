const InputField = ({
  className = "",
  id,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  inputWidth,
  disabled,
  inputStyle,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={`bg-white border border-borderPrimary text-black h-[2.75rem] text-base font-semibold rounded-lg block w-full py-3 px-4 dark:placeholder-gray-light placeholder:font-normal disabled:bg-[#e9e9e9] focus:outline-none
       ${className} ${inputWidth}`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default InputField;
