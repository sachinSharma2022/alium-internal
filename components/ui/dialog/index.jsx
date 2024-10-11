import { Dialog as HDialog } from "@headlessui/react";

export default function Dialog({ children, isOpen, onClose }) {
  return (
    <>
      <HDialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <HDialog.Panel
              transition
              className="w-full max-w-md rounded-xl border border-borderPrimary bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {children}
            </HDialog.Panel>
          </div>
        </div>
      </HDialog>
    </>
  );
}
