import React from "react";
import { Button } from "../../ui/button";
import { InputField } from "../../ui/input";
import Dropdown from "../../ui/dropdown";

const InviteUser = () => {
  return (
    <>
      <div className="mb-6">
        <InputField className="w-full" placeholder="Name" label="John Doe" />
      </div>

      <div className="mb-6">
        <InputField
          className="w-full"
          placeholder="Email"
          label="johndoe@email.com"
        />
      </div>

      <div className="mb-6">
        <Dropdown label="Role" />
      </div>

      <div>
        <Dropdown label="Organisation" />
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
