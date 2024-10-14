import React from "react";
import { Button } from "../../ui/button";
import InputField from "../../ui/input";
import ColorSelector from "../../ui/colorSelector";

const WorkspaceRename = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <ColorSelector />
        <div className="w-full">
          <InputField placeholder="Workspace Name" />
        </div>
      </div>

      <div class="border-b border-grey-700 pt-5 mb-5"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceRename;
