import React from "react";
import { Button } from "../../ui/button";
import { InputField } from "../../ui/input";
import Dropdown from "@/components/ui/dropdown";

const CopySurvey = () => {
  return (
    <div>
      <div className="mb-6">
        <InputField
          className="w-full"
          placeholder="Lead generati|"
          label="Survey title"
        />
      </div>

      <div>
        <Dropdown workspace label="Select Workplace" />
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
