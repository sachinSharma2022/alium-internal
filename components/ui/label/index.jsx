import { cn } from "@/lib/utils";
import ToolTip from "../tooltip";

const Label = ({ labelText, showTooltip = false, className, ref, props }) => {
  return (
    <>
      <label
        className={cn(
          className,
          "mb-[6px] font-semibold text-black flex items-center"
        )}
        ref={ref}
        {...props}
      >
        <span className="shrink-0">{labelText}</span>
        {showTooltip && (
          <ToolTip icon="/images/info-circle.svg">
            <p>
              Note: Use at least 8 characters. Don’t use a password from another
              site, or something obvious like your pet’s name.
            </p>
          </ToolTip>
        )}
      </label>
    </>
  );
};

export default Label;
