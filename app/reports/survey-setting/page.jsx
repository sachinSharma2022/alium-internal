"use client"
import { useState } from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import RadioButton from '@/components/ui/radioButton'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import DropDown from '@/components/reports/dropDown'
import ProcessTable from '@/components/reports/table/processTable'

const SurveySetting = () => {

    //  Radio multi Selection 
    const radioGroup = [
        {
            label: "Word Cloud",
            id: "wordCloud",
            htmlFor: "wordCloud",
        },
        {
            label: "List",
            id: "list",
            htmlFor: "list",
        },
        {
            label: "Category",
            id: "category",
            htmlFor: "category",
        },
        {
            label: "Actual response",
            id: "response",
            htmlFor: "response",
        },
    ]

    // Configure Widget Modal
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    const serveyTestItem = [
        { label: "Test Survey" },
        { label: "Test Survey" },
        { label: "Test Survey" },
    ]



    return (
        <>
            <PrimaryLayout>
                <section className="flex w-full">
                    <div className="bg-white-smoke w-full p-6">
                        <div className="flex items-center justify-between py-4 px-5 bg-white mx-auto rounded-xl w-full">
                            <div className="flex items-center gap-6">
                                <h6 className="text-black-primary flex items-center gap-5">
                                    <figure>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_199_4436)">
                                                <path d="M4.16663 10H15.8333" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.16663 10L9.16663 15" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.16663 10L9.16663 5" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_199_4436">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                    This is an example for the Survey Title.
                                </h6>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-fit">
                                    <Button size="sm">
                                        <Image
                                            src="/images/arrows-up-down.svg"
                                            width={20}
                                            height={20}
                                            alt="not found"
                                        />
                                        Collapse All
                                    </Button>
                                </div>
                                <div className="w-fit">
                                    <Button variant="blueBtn" size="sm">
                                        Save View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* Accordion  */}
                        <div className="w-full mt-5">
                            <Disclosure as="div" className="p-6 mb-5 bg-white rounded-xl" defaultOpen={true}>
                                <div className="rounded-xl border border-borderPrimary overflow-hidden">
                                    <DisclosureButton className="group flex w-full justify-between bg-primary-red p-5">
                                        <h6 className="text-black-primary flex items-start">
                                            <figure>
                                                <Image
                                                    src="/images/reportimg1.svg"
                                                    width={36}
                                                    height={36}
                                                    alt="not found"
                                                />
                                            </figure>
                                            <div className="ml-4 flex flex-col">
                                                1. How was HR behaviour during all the process?
                                                <span className="flex mt-3 gap-3">
                                                    <small className="flex gap-2 items-center leading-none">
                                                        <span className="edgecase text-gray-light font-normal">Answered:</span>
                                                        <span className="text-black-primary font-medium">8</span>
                                                    </small>
                                                    <small className="flex gap-2 items-center leading-none">
                                                        <span className="edgecase text-gray-light font-normal">Skipped:</span>
                                                        <span className="text-black-primary font-medium">2</span>
                                                    </small>
                                                </span>
                                            </div>
                                        </h6>
                                        <Image
                                            src="/images/down.svg"
                                            width={20}
                                            height={20}
                                            alt="not found "
                                            className="group-data-[open]:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 text-black-primary p-5">
                                        {/* Radio multi Selection & Setting Icon */}
                                        <div className="flex items-center justify-between">
                                            <ul className="flex gap-[30px]">
                                                {
                                                    radioGroup.map((item, index) => (
                                                        <li className="font-medium text-black-primary">
                                                            <RadioButton
                                                                type="radio"
                                                                className1="checked:border-primary-blue"
                                                                label={item.label}
                                                                id={item.id}
                                                                htmlFor={item.htmlFor}
                                                            />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <Button className="border border-borderPrimary rounded-lg p-2 cursor-pointer hover hover-secondary bg-white" onClick={open}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2049_2076)">
                                                        <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2049_2076">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Button>
                                            {/* Modal  */}
                                            <Dialog open={isOpen} as="div" className=" z-10 focus:outline-none" onClose={close}>
                                                <div className="fixed inset-0 z-[50] w-screen overflow-y-auto">
                                                    <div className="flex min-h-full items-center justify-center p-4">
                                                        <DialogPanel
                                                            transition
                                                            className="w-full md:max-w-[860px] h-[620px] rounded-xl bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow2 p-6"
                                                        >
                                                            <DialogTitle className="flex items-center justify-between">
                                                                <h6 className="font-bold text-black-primary">
                                                                    Configure Widget
                                                                </h6>
                                                                <Button onClick={close} className="!border-none">
                                                                    <Image
                                                                        src="/images/close.svg"
                                                                        width={24}
                                                                        height={24}
                                                                        alt="close icon"
                                                                    />
                                                                </Button>
                                                            </DialogTitle>
                                                            <div className="mt-6">
                                                                <div className="flex justify-between h-[452px] mb-6">
                                                                    {/* Left  */}
                                                                    <div className="w-[320px]">
                                                                        <p className="text-black-primary font-semibold">Chart Options</p>
                                                                        <div className="h-[calc(452px-50px)] overflow-y-auto custom- scrollbar">
                                                                            <ul className="mt-3 flex flex-wrap gap-3 border-b border-borderPrimary pb-4">
                                                                                <li className="flex-grow">
                                                                                    <Button size="sm" className="!gap-x-4">
                                                                                        <span>
                                                                                            <Image
                                                                                                src="/images/pie.svg"
                                                                                                width={24}
                                                                                                height={24}
                                                                                                alt="not found"
                                                                                            />
                                                                                        </span>
                                                                                        Trend Chart
                                                                                    </Button>
                                                                                </li>
                                                                            </ul>
                                                                            <ul>
                                                                                {/* Source  */}
                                                                                <li>
                                                                                    <div className="flex items-center justify-between mt-4">
                                                                                        <p className="font-semibold text-black-primary mb-3">Source</p>
                                                                                        <figure>
                                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <g clip-path="url(#clip0_1356_24861)">
                                                                                                    <path d="M12 5V19" stroke="#3B37FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                    <path d="M5 12H19" stroke="#3B37FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                </g>
                                                                                                <defs>
                                                                                                    <clipPath id="clip0_1356_24861">
                                                                                                        <rect width="24" height="24" fill="white" />
                                                                                                    </clipPath>
                                                                                                </defs>
                                                                                            </svg>
                                                                                        </figure>
                                                                                    </div>
                                                                                    {/* DropDown  */}
                                                                                    <DropDown
                                                                                        title="Test Survey"
                                                                                        types={serveyTestItem}
                                                                                        width="20"
                                                                                        height="20"
                                                                                        custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                        custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[320px]"
                                                                                        disable={false}
                                                                                    />
                                                                                </li>
                                                                                {/* X Axis  */}
                                                                                <li>
                                                                                    <div className="flex items-center justify-between mt-4">
                                                                                        <p className="font-semibold text-black-primary mb-3">X-Axis</p>
                                                                                        <figure>
                                                                                        </figure>
                                                                                    </div>
                                                                                    {/* DropDown  */}
                                                                                    <DropDown
                                                                                        title="Submission Time"
                                                                                        types={serveyTestItem}
                                                                                        width="20"
                                                                                        height="20"
                                                                                        custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                        custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[320px]"
                                                                                        disable={true}
                                                                                    />
                                                                                </li>
                                                                                {/* Y Axis  */}
                                                                                <li>
                                                                                    <div className="flex items-center justify-between mt-4">
                                                                                        <p className="font-semibold text-black-primary mb-3">Y - Axis</p>
                                                                                        <figure>
                                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <g clip-path="url(#clip0_1356_24861)">
                                                                                                    <path d="M12 5V19" stroke="#3B37FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                    <path d="M5 12H19" stroke="#3B37FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                </g>
                                                                                                <defs>
                                                                                                    <clipPath id="clip0_1356_24861">
                                                                                                        <rect width="24" height="24" fill="white" />
                                                                                                    </clipPath>
                                                                                                </defs>
                                                                                            </svg>
                                                                                        </figure>
                                                                                    </div>
                                                                                    {/* DropDown  */}
                                                                                    <ul className="flex flex-wrap gap-2">
                                                                                        <li className="flex gap-2 w-[276px]">
                                                                                            <DropDown
                                                                                                title="Count"
                                                                                                types={serveyTestItem}
                                                                                                width="20"
                                                                                                height="20"
                                                                                                custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                                custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-fit"
                                                                                            />
                                                                                            <DropDown
                                                                                                title="Bar"
                                                                                                types={serveyTestItem}
                                                                                                width="20"
                                                                                                height="20"
                                                                                                custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                                custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-fit"
                                                                                            />
                                                                                        </li>
                                                                                        <li className="flex items-center justify-between flex-grow w-[276px]">
                                                                                            <DropDown
                                                                                                title2="Rate your overall satisfaction with our product"
                                                                                                types={serveyTestItem}
                                                                                                width="20"
                                                                                                height="20"
                                                                                                custClass1="py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px] w-[276px]"
                                                                                                custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[276px]"
                                                                                            />
                                                                                            <figure>
                                                                                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <g clip-path="url(#clip0_1945_1237)">
                                                                                                        <path d="M3.33325 5.83331H16.6666" stroke="#C62828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                        <path d="M8.33325 9.16669V14.1667" stroke="#C62828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                        <path d="M11.6667 9.16669V14.1667" stroke="#C62828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                        <path d="M4.16675 5.83331L5.00008 15.8333C5.00008 16.2753 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2753 15.0001 15.8333L15.8334 5.83331" stroke="#C62828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                        <path d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333" stroke="#C62828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                                    </g>
                                                                                                    <defs>
                                                                                                        <clipPath id="clip0_1945_1237">
                                                                                                            <rect width="20" height="20" fill="white" />
                                                                                                        </clipPath>
                                                                                                    </defs>
                                                                                                </svg>
                                                                                            </figure>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    {/* right  */}
                                                                    <div className="w-[468px]">
                                                                        <p className="text-black-primary font-semibold">Preview</p>
                                                                        <div className="w-[468px] p-5 bg-white-smoke rounded-xl mt-3">
                                                                            <div className="bg-white rounded-lg py-3 px-4 text-black-primary font-medium">
                                                                                Employee Feedback
                                                                            </div>
                                                                            {/* Chart Box  */}
                                                                            <div className="h-[309px] bg-white rounded-xl mt-4 flex items-center justify-center">
                                                                                <Image
                                                                                    src="/images/Line-and-bar-chart.svg"
                                                                                    width={380}
                                                                                    height={269}
                                                                                    alt="not found"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex gap-5">
                                                                    <Button size="sm">Cancel</Button>
                                                                    <Button variant="blueBtn" size="sm">Save</Button>
                                                                </div>
                                                            </div>
                                                        </DialogPanel>
                                                    </div>
                                                </div>
                                            </Dialog>

                                        </div>
                                        <ProcessTable />
                                    </DisclosurePanel>
                                </div>
                            </Disclosure>
                        </div>
                    </div>

                </section>
            </PrimaryLayout>
        </>
    )
}

export default SurveySetting
