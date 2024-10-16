import React from "react";
import { Button } from "../../ui/button";
import { InputField } from "../../ui/input";
import Dropdown from "../../ui/dropdown";
import CheckBox from "../../ui/checkbox";

const StartFromScratchSurvey = () => {
  return (
    <>
      <div className="mb-6">
        <InputField
          className="w-full"
          placeholder="Lead generati|"
          label="Survey title"
        />
      </div>

      <div className="mb-6">
        <InputField
          className="w-full"
          placeholder="Type in tags"
          label="Survey Tags (Optional)"
        />
      </div>

      <div className="mb-6">
        <Dropdown workspace label="Select Workplace" />
      </div>

      <div>
        <CheckBox
          label="Advance setting"
          size="sm"
          text="Allow respondents to submit answers anonymously."
          customClass="font-medium"
          placeholder="Type in tags"
        />
      </div>

      <div class="border-b border-grey-700 pt-6 mb-6"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Continue
        </Button>
      </div>
    </>
  );
};

export default StartFromScratchSurvey;
