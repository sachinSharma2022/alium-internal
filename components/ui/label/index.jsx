import ToolTip from "../tooltip";

const Label = ({ labelText, tooltipContent, className }) => {
  return (
    <>
      <label className={`mb-[6px] font-semibold text-black-primary flex items-center ${className}`}>
        <span className="shrink-0">{labelText}</span>
        {tooltipContent && (
          <ToolTip icon="/images/info-circle.svg">
            <p>
             {tooltipContent}
            </p>
          </ToolTip>
        )}
      </label>
    </>
  );
};

export default Label;
