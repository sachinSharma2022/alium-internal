import React, { useState } from "react";
import Dialog from "./index";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Dialog
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        modalWidth={args.modalWidth}
      >
        <h2 className="text-lg font-semibold">Dialog Title</h2>
        <p>This is the dialog content area.</p>
        <button
          onClick={handleClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Dialog>
    </>
  );
};

export const DefaultDialog = Template.bind({});
DefaultDialog.args = {
  isOpen: false,
  modalWidth: "max-w-lg", // Set default modal width
};

export const SmallDialog = Template.bind({});
SmallDialog.args = {
  isOpen: false,
  modalWidth: "max-w-sm", // Small width for the dialog
};

export const LargeDialog = Template.bind({});
LargeDialog.args = {
  isOpen: false,
  modalWidth: "max-w-2xl", // Large width for the dialog
};
