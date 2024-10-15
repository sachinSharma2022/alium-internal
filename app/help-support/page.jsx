"use client"
import React from 'react'
import SideBar from '@/components/layout/sideBar'
import SearchPrimary from '@/components/ui/searchPrimary'
import ProcessStep from '@/components/helpSupport/processStep'
import DisclosureItem from '@/components/helpSupport/disclosureItem'
import Link from 'next/link'
import Image from 'next/image'

const processSteps = [
    {
        stepNumber: "1",
        discription: "Go to Settings and copy the tracking code snippet.",

    },
    {
        stepNumber: "2",
        discription: "Sign in to your Google Tag Manager account.",
        stepImg: "images/help-img1.svg",
        imgAlt: "Account process step guide image",
        caption: "Select ‘New Tag’ to add a new tag.",
    },
    {
        stepNumber: "3",
        discription: "Under the Tag Configuration section, select the Custom HTML option. This will be your tag type.",
        stepImg: "images/help-img1.svg",
        imgAlt: "Account process step guide image",
    },
    {
        stepNumber: "4",
        discription: "Paste the code in the space provided.",
        stepImg: "images/help-img1.svg",
        imgAlt: "Account process step guide image",
    },
    {
        stepNumber: "5",
        discription: "Now under the Triggering section, you can select your trigger conditions from the existing list of triggers.",
        stepImg: "images/help-img1.svg",
        imgAlt: "Account process step guide image",
        caption: "Or if you wish to add a new trigger, click on the plus(+) icon on the top-right corner of your screen.",
    },
    {
        stepNumber: "6",
        discription: "When you’re done, click on Save.",
        stepImg: "/images/help-img1.svg",
        imgAlt: "Account process step guide image",
    },
]

const HelpSupport = () => {
    return (
        <main>
            <div className="flex">
                <SideBar />
                {/* Help & Support  */}
                <section className="pt-5 px-4 bg-white-smoke w-full">
                    <div>
                        <Link href="#" className="flex items-center">
                            <Image
                                src="images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="go back"
                                className="mr-3"
                            />
                            <span className="font-semibold text-primary-blue">Go Back</span>
                        </Link>
                    </div>
                    {/* Accordion  */}
                    <div className="bg-white p-6 rounded-xl mt-6">
                        {/* title  */}
                        <div className="flex items-center justify-between  border-b border-borderPrimary pb-4">
                            <h5 className="text-black-primary">Help and Support</h5>
                            <SearchPrimary
                                icon="images/search-light.svg"
                                placeholder="Search keywords here"
                            />
                        </div>
                        {/* Accordion Content  */}
                        <div className="w-full bg-white space-y-4 mt-4">
                            {/* Item 1  */}
                            <DisclosureItem title="What is the Alium Tracking Code?">
                                <p className="text-tricorn-black text-base">
                                    No, it won’t. At Alium we take site performance very seriously and do everything in our power to optimize everything in the process. Our tracking code us highly optimized to ensure fast deliverability of our service on your sites with as little impact as possible.
                                </p>
                            </DisclosureItem>
                            {/* Item 2  */}
                            <DisclosureItem title="Will Alium Slow Down My Site?">
                                <p className="text-tricorn-black text-base">
                                    No, it won’t. At Alium we take site performance very seriously and do everything in our power to optimize everything in the process. Our tracking code us highly optimized to ensure fast deliverability of our service on your sites with as little impact as possible.
                                </p>
                                <ul className="text-primary-blue *:font-semibold *:text-base mt-4">
                                    <li>
                                        <Link href="#">
                                            1. How to Install your Alium Tracking Code
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            2. How to Install your Alium Tracking Code within Google Tag Manager
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            3. How to Install your Alium Tracking Code within Shopify Theme
                                        </Link>
                                    </li>
                                </ul>
                            </DisclosureItem>

                            {/* Item 3  */}
                            <DisclosureItem title="How to Install your Alium Tracking Code">

                            </DisclosureItem>

                            {/* Item 4  */}
                            <DisclosureItem title="Install within Google Tag Manager">
                                <div className="text-tricorn-black text-base h-[6.75rem] flex flex-col justify-between">
                                    <p>
                                        Sick and tired of manually changing your website code every time you want to embed a survey in your web pages? So are we! With Google Tag Manager, you can incorporate the Alium into your website without changing the site code.
                                    </p>
                                    <p>
                                        Let’s see how this works:
                                    </p>
                                </div>
                                {/* Timeline  */}
                                <section className="mt-[3.375rem]">
                                    <ul>
                                        {
                                            processSteps.map((steps, index) => (
                                                <ProcessStep
                                                    key={index}
                                                    stepNumber={steps.stepNumber}
                                                    discription={steps.discription}
                                                    stepImg={steps.stepImg}
                                                    imgAlt={steps.imgAlt}
                                                    caption={steps.caption}
                                                    isLastStep={index === processSteps.length - 1}
                                                />
                                            ))
                                        }
                                    </ul>
                                </section>
                            </DisclosureItem>

                            {/* Item 5  */}
                            <DisclosureItem title="Install within Shopify Theme">

                            </DisclosureItem>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HelpSupport
