import React from "react";
import { Button } from "../../ui/button";

const DeleteWorkspace = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-3 relative  w-full flex-[0_0_auto]">
        <div className="mt-[-1.00px]  font-semibold text-black text-xl relative self-stretch text-center ">
          Delete Workspace?
        </div>
        <p className="font-normal text-grey-2 text-base relative self-stretch text-center">
          Are you sure you want to delete this workspace? <br />
          This action cannot be undone.
        </p>
      </div>

      <div class="border-b border-grey-700 pt-6 mb-6"></div>

      <div className="flex items-center justify-between gap-5">
        <Button variant="default" size="sm">
          No, Cancel
        </Button>

        <Button variant="redBtn" size="sm">
          Yes, Delete
        </Button>
      </div>
    </>
  );
};

export default DeleteWorkspace;
