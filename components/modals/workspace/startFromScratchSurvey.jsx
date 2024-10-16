import React from "react";
import { Button } from "../../ui/button";
import { InputField } from "../../ui/input";
import Dropdown from "../../ui/dropdown";
import CheckBox from "../../ui/checkbox";
import Label from "@/components/ui/label";

const StartFromScratchSurvey = () => {
  return (
    <>
      <div className="mb-6">
        <Label labelText="Survey title" />
        <InputField className="w-full" placeholder="Lead generati|" />
      </div>

      <div className="mb-6">
        <Label labelText="Survey Tags (Optional)" />
        <InputField className="w-full" placeholder="Type in tags" />
      </div>

      <div className="mb-6">
        <Label labelText="Select Workplace" />
        <Dropdown workspace />
      </div>

      <div>
        <Label labelText="Advance setting" />
        <CheckBox
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
