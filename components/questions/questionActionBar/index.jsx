import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icon"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import DropDown from "../dropDown"
import CheckBox from "@/components/ui/checkbox"
import ActionModal from "../modals/actionModal"

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

const QuestionActionBar = ({ previewBtn, saveAsDraftsBtn }) => {

    const [TranslateModalOpen, setTranslateModalOpen] = useState(false);
    const [DeviceModalOpen, setDeviceModalOpen] = useState(false);


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
                    <li className="text-black-primary">
                        <Icons.translate onClick={() => setTranslateModalOpen(true)} />
                        <ActionModal
                            isOpen={TranslateModalOpen} setIsOpen={setTranslateModalOpen}
                            title="Language Translation"
                            actionBtnPrimary="Cancel"
                            actionBtnSecondary="Save"
                        >
                            <DropDown
                                label="Form Main Language"
                                title="Select"
                            >
                                <ul>
                                    <li>English</li>
                                    <li>English</li>
                                    <li>English</li>
                                    <li>English</li>
                                </ul>
                            </DropDown>
                            <DropDown
                                label="Translation Language"
                                title="Select"
                            >
                                <ul>
                                    <li>Hindi</li>
                                    <li>Hindi</li>
                                    <li>Hindi</li>
                                    <li>Hindi</li>
                                </ul>
                            </DropDown>
                            <div className="flex items-start gap-4">
                                <CheckBox />
                                <div>
                                    <h6 className="text-black-primary text-base">Use Auto Translation</h6>
                                    <p className="edgecase">
                                        Turn on automatic translations in your Setting. If someone doesn't understand your form's language, they can switch it to their browser's default language.
                                    </p>
                                </div>
                            </div>
                        </ActionModal>
                    </li>
                    <li className="text-black-primary" >
                        <Icons.device onClick={() => setDeviceModalOpen(true)} />
                        <ActionModal
                            isOpen={DeviceModalOpen} setIsOpen={setDeviceModalOpen}
                            title="Survey Options"
                            actionBtnPrimary="Cancel"
                            actionBtnSecondary="Continue"
                        >
                            <DropDown
                                label="Survey title"
                                title="Select"
                            >
                                <ul>
                                    <li>French</li>
                                    <li>French</li>
                                    <li>French</li>
                                    <li>French</li>
                                </ul>
                            </DropDown>
                            <h6 className="text-black-primary text-base mb-4">Advance setting</h6>
                            <div className="flex items-start gap-3">
                                <CheckBox />
                                <p className="edgecase">Allow respondents to submit answers anonymously.</p>
                            </div>
                        </ActionModal>
                    </li>
                    <li className="text-black-primary">
                        <Icons.setting />
                    </li>
                </ul>
            </div>
            {/* preview & save as defauls Button  */}
            <ul className="flex gap-5">
                <li><Button size="sm">{previewBtn}</Button></li>
                <li><Button size="sm">{saveAsDraftsBtn}</Button></li>
            </ul>
        </div>
    )
}
export default QuestionActionBar