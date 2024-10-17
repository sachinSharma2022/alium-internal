"use client";
import React, { useState } from "react";
import edit from "../../public/images/edit.svg";
import userplus from "../../public/images/user-plus.svg";
import trash from "../../public/images/trash.svg";
import Accordion from "@/components/accordion";
import PrimaryLayout from "@/components/layout/primaryLayout";
import AddNewSurvey from "@/components/workspace/addNewSurvey";
import WorkspaceHeading from "@/components/workspace/workspaceHeading";

const Workspace = () => {
  const [addSurvey, setAddSurvey] = useState(false);
  const icons = [edit, userplus, trash];

  return (
    <PrimaryLayout>
      <section className="pt-5 px-4 bg-white-smoke w-full">
        <WorkspaceHeading
          onClick={() => setAddSurvey(true)}
          heading="Workspace"
          buttonText="Add New Survey"
          icons={icons}
        />
        {!addSurvey ? (
          <Accordion />
          
        ) : (
          <AddNewSurvey backHandler={() => setAddSurvey(false)} />
        )}
      </section>
    </PrimaryLayout>
  );
};

export default Workspace;
