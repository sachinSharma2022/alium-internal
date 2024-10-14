import React from "react";
import { Button } from "../../ui/button";
import InputField from "../../ui/input";
import Dropdown from "../../ui/dropdown";
import SamplePromptsCard from "../../workspace/samplePromptsCard";

const CreateWithAISurvey = () => {
  return (
    <>
      <div className="mb-6">
        <InputField
          className="w-full"
          placeholder="Enter a Prompt"
          label="Describe the form you have in mind"
          showTooltip
        />
      </div>
      <div className="mb-6 flex gap-6 w-full">
        <div className="w-full">
          <Dropdown label="Number of Questions" />
        </div>

        <div className="w-full">
          <Dropdown workspace label="Select Workplace" />
        </div>
      </div>

      <SamplePromptsCard />
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

export default CreateWithAISurvey;
