import { Dialog as HDialog } from "@headlessui/react";

export default function Dialog({ children, isOpen, onClose, modalWidth }) {
  return (
    <>
      <HDialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto modal-overlay ">
          <div className="flex min-h-full items-center justify-center p-4 z-50">
            <HDialog.Panel
              transition
              className={`w-full rounded-xl border border-borderPrimary bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 ${
                !modalWidth ? "max-w-md" : modalWidth
              }`}
            >
              {children}
            </HDialog.Panel>
          </div>
        </div>
      </HDialog>
    </>
  );
}
