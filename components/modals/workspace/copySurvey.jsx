import React from "react";
import { Button } from "../../ui/button";
import { InputField } from "../../ui/input";
import Dropdown from "@/components/ui/dropdown";
import Label from "@/components/ui/label";

const CopySurvey = () => {
  return (
    <div>
      <div className="mb-6">
        <Label labelText="Survey title" />
        <InputField className="w-full" placeholder="Lead generati|" />
      </div>

      <div>
        <Label
          tooltipContent="  Note: Use at least 8 characters. Don’t use a password from another
              site, or something obvious like your pet’s name."
          labelText="Select Workplace"
        />
        <Dropdown workspace />
      </div>

      <div class="border-b border-grey-700 pt-5 mb-5"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CopySurvey;
