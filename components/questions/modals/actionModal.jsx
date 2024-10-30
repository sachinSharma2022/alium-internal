import React from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icon"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const ActionModal = ({ isOpen, setIsOpen, children,actionBtnPrimary, actionBtnSecondary,title }) => {

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="w-[620px] space-y-4 border bg-white rounded-xl p-6 shadow2">
                        <DialogTitle as="h6" className="font-bold text-black-primary flex items-center justify-between border-b border-borderPrimary pb-6">
                            {title}
                            <Icons.close onClick={() => setIsOpen(false)} />
                        </DialogTitle>
                        <Description>
                            {children}
                        </Description>
                        <div className="flex gap-4">
                            <Button size="sm" onClick={() => setIsOpen(false)}>{actionBtnPrimary}</Button>
                            <Button variant="blueBtn" size="sm" onClick={() => setIsOpen(false)}>{actionBtnSecondary}</Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default ActionModal
