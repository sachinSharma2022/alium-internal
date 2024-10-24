
"use client"
import { useState } from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import RadioButton from '@/components/ui/radioButton'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import DropDown from '../dropDown'
import ProcessTable from '@/components/reports/table/processTable'
import Date from '../date'
import Accordion from './accordion'
import Icon from '@/components/ui/icon'

const ReportSurveySetting = () => {
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
    // Pie Chart Drop Down 
    const pieChartIcon = [
        { label: "Bar Chart", pieIcon: "/images/pie.svg" },
        { label: "Trend Chart", pieIcon: "/images/pie.svg" },
        { label: "Pie Chart", pieIcon: "/images/pie.svg" },
        { label: "Gauge Chart", pieIcon: "/images/pie.svg" },
        { label: "Donut Chart", pieIcon: "/images/pie.svg" },
        { label: "Composite Chart", pieIcon: "/images/pie.svg" },
        { label: "Line Chart", pieIcon: "/images/pie.svg" },
    ]
    const surveyTypes = [
        { label: "Survey Types 1" },
        { label: "Survey Types 2" },
        { label: "Survey Types 3" },
    ]

    const surveyLanguage = [
        { label: "surveyLanguage 1" },
        { label: "surveyLanguage 2" },
        { label: "surveyLanguage 3" },
    ]
    const responseCount = [
        { label: "responseCount 1" },
        { label: "responseCount 2" },
        { label: "responseCount 3" },
    ]

    return (
        <PrimaryLayout>
            <section className="flex w-full">
                <div className="bg-white-smoke w-full p-6">
                    <div className="flex items-center justify-between py-4 px-5 bg-white mx-auto rounded-xl w-full">
                        <div className="flex items-center gap-6">
                            <h6 className="text-black-primary flex items-center">
                                <Icon
                                    name="arrowLeft"
                                    color="#111111"
                                    className="mr-5"
                                />
                                This is an example for the Survey Title.
                            </h6>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-fit">
                                <Button size="sm">
                                    <Icon
                                        name="arrowUpDown"
                                        color="#111111"
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
                    <div className="w-full mt-5 p-6 bg-white rounded-xl space-y-5">
                        {/* Accordion 1  */}
                        <Accordion
                            img="/images/reportimg1.svg"
                            title="1. How was HR behaviour during all the process?"
                            ansNumber="8"
                            skipNumber="2"

                        >
                            {/* Radio multi Selection & Setting Icon */}
                            <div className="flex items-center justify-between">
                                <ul className="flex gap-[30px]">
                                    {
                                        radioGroup.map((item, index) => (
                                            <li className="font-medium text-black-primary" key={index}>
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
                                <div className="flex items-center gap-3">
                                    {/* Pie Chart List DropDown  */}
                                    <DropDown
                                        title="Gauge"
                                        dropDownImg="/images/pie.svg"
                                        width="20"
                                        height="20"
                                        types={pieChartIcon}
                                        custClass1="py-[10px] px-4 rounded-lg h-10 font-semibold text-sm gap-2"
                                        custClass2="w-[200px] bg-white z-50 h-72 rounded-lg mt-2 custom-scrollbar font-semibold px-4"
                                        border={true}
                                    />
                                    <Button className="border border-borderPrimary rounded-lg p-2 cursor-pointer bg-white" onClick={open}>
                                        <Icon
                                            name="setting"
                                            width="24"
                                            height="24"
                                        />
                                    </Button>
                                </div>
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
                                                        <Icon
                                                            name="close"
                                                            color="#111111"
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
                                                                            <Icon
                                                                                name="pie"
                                                                                color="#3B37FF"
                                                                            />
                                                                            Trend Chart
                                                                        </Button>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    {/* Source  */}
                                                                    <li>
                                                                        <div className="flex items-center justify-between mt-4">
                                                                            <p className="font-semibold text-black-primary mb-3">Source</p>
                                                                            <Icon
                                                                                name="plus"
                                                                                color="#3B37FF"
                                                                            />
                                                                        </div>
                                                                        {/* DropDown  */}
                                                                        <DropDown
                                                                            title="Test Survey"
                                                                            types={serveyTestItem}
                                                                            custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                            custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[320px]"
                                                                            disable={false}
                                                                        />
                                                                    </li>
                                                                    {/* X Axis  */}
                                                                    <li>
                                                                        <div className="flex items-center justify-between mt-4">
                                                                            <p className="font-semibold text-black-primary mb-3">X-Axis</p>
                                                                        </div>
                                                                        {/* DropDown  */}
                                                                        <DropDown
                                                                            title="Submission Time"
                                                                            types={serveyTestItem}
                                                                            custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                            custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[320px]"
                                                                            disable={true}
                                                                        />
                                                                    </li>
                                                                    {/* Y Axis  */}
                                                                    <li>
                                                                        <div className="flex items-center justify-between mt-4">
                                                                            <p className="font-semibold text-black-primary mb-3">Y - Axis</p>
                                                                            <Icon
                                                                                name="plus"
                                                                                color="#3B37FF"
                                                                            />
                                                                        </div>
                                                                        {/* DropDown  */}
                                                                        <ul className="flex flex-wrap gap-2">
                                                                            <li className="flex gap-2 w-[276px]">
                                                                                <DropDown
                                                                                    title="Count"
                                                                                    types={serveyTestItem}
                                                                                    custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                    custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-fit"
                                                                                />
                                                                                <DropDown
                                                                                    title="Bar"
                                                                                    types={serveyTestItem}
                                                                                    custClass1=" w-full py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px]"
                                                                                    custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-fit"
                                                                                />
                                                                            </li>
                                                                            <li className="flex items-center justify-between flex-grow w-[276px]">
                                                                                <DropDown
                                                                                    title2="Rate your overall satisfaction with our product"
                                                                                    types={serveyTestItem}
                                                                                    custClass1="py-4 px-3 rounded-lg text-blackPrimary font-semibold h-[44px] w-[276px]"
                                                                                    custClass2=" rounded-lg py-2 mt-2 bg-white z-50 w-[276px]"
                                                                                />
                                                                                <figure>
                                                                                    <Icon
                                                                                        name="delete"
                                                                                        color="#C62828"
                                                                                    />
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
                        </Accordion>

                        {/* Accordion 2  */}
                        <Accordion
                            img="/images/reportimg2.svg"
                            title="2. How long took all the process?"
                            ansNumber="8"
                            skipNumber="2"
                        >
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
                        </Accordion>
                    </div>
                </div>
                {/* Report Option  */}
                <div className="w-[22rem] p-6">
                    <h6 className="text-black-primary text-base border-b border-borderPrimary pb-3">Report Options</h6>
                    {/* Survey Types  */}
                    <div className="mt-6">
                        <ul className="flex flex-col gap-5 border-b border-borderPrimary pb-4">
                            <li>
                                <h6 className="mb-2 text-black-primary text-base">Survey Type</h6>
                                <DropDown
                                    title="All"
                                    types={surveyTypes}
                                    width="20"
                                    height="20"
                                    custClass1="py-3 px-4 rounded-lg w-[264px] font-semibold"
                                    custClass2="rounded-lg mt-2 w-[264px] bg-white"
                                />
                            </li>
                            <li>
                                <h6 className="mb-2 text-black-primary text-base">Survey Language</h6>
                                <DropDown
                                    title="Survey Language"
                                    types={surveyLanguage}
                                    width="20"
                                    height="20"
                                    custClass1="py-3 px-4 rounded-lg w-[264px] font-semibold"
                                    custClass2="rounded-lg mt-2 w-[264px] bg-white"
                                />
                            </li>
                            <li>
                                <h6 className="mb-2 text-black-primary text-base">Response count</h6>
                                <DropDown
                                    title="At Least One Response"
                                    types={responseCount}
                                    width="20"
                                    height="20"
                                    custClass1="py-3 px-4 rounded-lg w-[264px] font-semibold"
                                    custClass2="rounded-lg mt-2 w-[264px] bg-white"
                                />
                            </li>
                            <li>
                                <h6 className="mb-2 text-black-primary text-base">Date range</h6>
                                <Date />
                            </li>
                            <li>
                                <Button variant="blueBtn" size="sm">
                                    Apply
                                </Button>
                            </li>
                        </ul>
                        {/* Export Report  */}
                        <div className="mt-4">
                            <h6 className="text-black-primary text-base mb-4">Export Report</h6>
                            <Button size="sm">
                               <Icon 
                               name="export"
                               width="20"
                               height="20"
                               />
                                Export
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PrimaryLayout>
    )
}

export default ReportSurveySetting
