import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icon"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import DropDown from "@/components/questions/dropDown"

const SecondaryHeading = ({ icons, preview, drafts, modal }) => {
    let [isOpen, setIsOpen] = useState(false)


    return (
        <div className="bg-white p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div>
                    <Button size="sm">
                        <Icons.plus className="text-primary-blue" />
                        Add Content
                    </Button>
                </div>
                <ul className="flex items-center gap-4">
                    {
                        icons.map((items, index) => (
                            <li key={index}>
                                <items.icon className="text-black-primary" onClick={() => items.modal && setIsOpen(true)} />
                                {
                                    items.modal && (
                                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                                                <DialogPanel className="w-[620px] space-y-4 border bg-white rounded-xl p-6 shadow2">
                                                    <DialogTitle as="h6" className="font-bold text-black-primary flex items-center justify-between border-b border-borderPrimary pb-6">
                                                        Language Translation
                                                        <Icons.close onClick={() => setIsOpen(false)} />
                                                    </DialogTitle>
                                                    <Description>
                                                        <DropDown />
                                                    </Description>
                                                    <div className="flex gap-4">
                                                        <Button size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
                                                        <Button variant="blueBtn" size="sm" onClick={() => setIsOpen(false)}>Save</Button>
                                                    </div>
                                                </DialogPanel>
                                            </div>
                                        </Dialog>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* preview & save as defauls Button  */}
            <ul className="flex gap-5">
                <li><Button size="sm">{preview}</Button></li>
                <li><Button size="sm">{drafts}</Button></li>
            </ul>
        </div>
    )
}
export default SecondaryHeading