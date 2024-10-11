import React from "react";
import WorkspaceHeading from "@/components/workspaceHeading";
import edit from "../../public/images/edit.svg";
import userplus from "../../public/images/user-plus.svg";
import trash from "../../public/images/trash.svg";
import Accordian from "@/components/accordian";

const Workspace = () => {
  const icons = [edit, userplus, trash];

  return (
    <div className="pt-5 px-4 bg-white-smoke w-full">
      <WorkspaceHeading
        heading="Workspace"
        buttonText="Add New Survey"
        icons={icons}
      />
      <Accordian />
    </div>
  );
};

export default Workspace;
