import React from "react";
import { Button } from "../../ui/button";
import InputField from "../../ui/input";
import Dropdown from "../../ui/dropdown";
import Label from "@/components/ui/label";

const InviteUser = () => {
  return (
    <>
      <div className="mb-6">
      <Label labelText="John Doe" />
        <InputField className="w-full" placeholder="Name"/>
      </div>

      <div className="mb-6">
      <Label labelText="johndoe@email.com" />
        <InputField
          className="w-full"
          placeholder="Email"
        />
      </div>

      <div className="mb-6">
         <Label labelText="Role" />
        <Dropdown />
      </div>

      <div>
         <Label labelText="Organisation" />
        <Dropdown />
      </div>

      <div class="border-b border-grey-700 pt-6 mb-6"></div>

      <div className="flex items-center justify-between gap-4">
        <Button variant="default" size="sm">
          Cancel
        </Button>

        <Button variant="blueBtn" size="sm">
          Send Invite
        </Button>
      </div>
    </>
  );
};

export default InviteUser;
