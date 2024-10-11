import React from "react";
import { Button } from "../ui/button";
import InputField from "../ui/input";

const CreateWorkspace = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <InputField placeholder="Workspace Name" />
      </div>

      <div class="border-b border-grey-700 ... pt-5 mb-5"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateWorkspace;
