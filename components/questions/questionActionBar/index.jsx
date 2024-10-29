import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icon"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import DropDown from "../dropDown"
import CheckBox from "@/components/ui/checkbox"

const contentItems = [
    {
        text: "Text",
        icon: Icons.hamburger,
        phIcon: Icons.phoneDots,
    },
    {
        text: "Radio",
        icon: Icons.circleCheck,
         phIcon: Icons.phoneDots,
    },
    {
        text: "Checkbox",
        icon: Icons.checkBox,
         phIcon: Icons.phoneDots,
    },
    {
        text: "Net Promoter Score",
        icon: Icons.guage,
         phIcon: Icons.phoneDots,
    },
    {
        text: "Rating",
        icon: Icons.star,
        phIcon: Icons.phoneDots,
    },
    {
        text: "Opinion Scale",
        icon: Icons.chartBar,
        phIcon: Icons.phoneDots,
    },
    {
        text: "Cover Page",
        icon: Icons.version,
        phIcon: Icons.phoneDots,
    },
    {
        text: "End Page",
        icon: Icons.versions,
        phIcon: Icons.phoneDots,
    },
    {
        text: "Question Group",
        icon: Icons.layoutList,
        phIcon: Icons.phoneDots,
    },
]
 const language = [
        {
            lang:"English"
        },
        {
            lang: "French"
        },
        {
            lang: "Spanich"
        },
    ]

const QuestionActionBar = ({ icons, preview, drafts }) => {

    let [isOpen, setIsOpen] = useState(false)


    return (
        <div className="bg-white p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div>
                    <Popover className="group">
                        <PopoverButton className="group-data-[open]">
                            <Button size="sm">
                                <Icons.plus className="text-primary-blue" />
                                Add Content
                            </Button>
                        </PopoverButton>
                        <PopoverPanel anchor="bottom start" className="flex flex-col w-[584px] bg-white border border-borderPrimary rounded-lg px-4 py-3 mt-3 shadow2">
                            <ul className="flex flex-wrap gap-4">
                                {
                                    contentItems.map((item, index) => (
                                        <li key={index} className="w-[168px] h-[120px] bg-gray-table-bg rounded-xl p-4 flex items-center justify-center relative">
                                            <figure className="flex items-center justify-center flex-col text-center">
                                                <item.icon className="text-primary-blue" />
                                                <figcaption className="mt-3 text-black-primary font-medium">
                                                    {item.text}
                                                </figcaption>
                                            </figure>
                                            <div className="absolute top-3 right-3">
                                                <item.phIcon />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </PopoverPanel>
                    </Popover>
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
                                                        <DropDown 
                                                            label="Form Main Language"
                                                            title="Select"
                                                            language={language}
                                                        />
                                                        <DropDown
                                                            label="Translation Language"
                                                            title="Select"
                                                            language={language}
                                                        />
                                                        <div className="flex items-start gap-4">
                                                            <CheckBox checked/>
                                                            <div>
                                                                <h6 className="text-black-primary text-base">Use Auto Translation</h6>
                                                                <p className="edgecase">
                                                                    Turn on automatic translations in your Setting. If someone doesn't understand your form's language, they can switch it to their browser's default language.
                                                                </p>
                                                            </div>
                                                        </div>
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
export default QuestionActionBar