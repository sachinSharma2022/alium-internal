const InputField = ({
  className = "",
  id,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  inputWidth,
  inputHeight,
  disabled,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={`bg-white border border-borderPrimary text-black h-[2.75rem] text-base font-semibold rounded-lg block w-full py-3 px-4 dark:placeholder-gray-light placeholder:font-normal disabled:bg-[#e9e9e9] focus:outline-none
       ${className} ${inputWidth} ${inputHeight}`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

const Error = ({ children }) => (
  <p className="text-red-600 absolute text-sm">{children}</p>
);
const Success = ({ children }) => (
  <p className="text-green-600 absolute text-sm">{children}</p>
);

export { Error, Success, InputField };
