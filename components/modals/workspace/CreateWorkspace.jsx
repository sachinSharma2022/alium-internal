"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import InputField from "../../ui/input";
import ColorSelector from "../../ui/colorSelector";
import { useDispatch, useSelector } from "react-redux";
import { createWorkspace } from "@/lib/redux/workspaceSlice";
const CreateWorkspace = ({ closeModal }) => {
  const [formValues, setFormValues] = useState();
  const dispatch = useDispatch();
  const { organizations, error, workspaces } = useSelector(
    (state) => state.workspace
  );
  const handleCreateWorkspace = (orgId, workspaceName) => {
    // dispatch(createWorkspace({ orgId, workspaceName }));
    // closeModal();
    dispatch(createWorkspace({ orgId, workspaceName }))
      .unwrap() 
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error("Error creating workspace:", error);
      });
  };
  const handleInputChange = (field) => {
    setFormValues(field);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(organizations[0].id, formValues, "organizations");
    handleCreateWorkspace(organizations[0].id, formValues);
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <ColorSelector />
        <div className="w-full">
          <InputField
            placeholder="Workspace Name"
            value={formValues} // Controlled input
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </div>

      <div class="border-b border-grey-700 pt-5 mb-5"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateWorkspace;
