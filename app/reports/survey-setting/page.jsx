import React from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'


const SurveySetting = () => {
    return (
        <PrimaryLayout>
            <section className="flex w-full">
                <div className="bg-white-smoke w-full p-6 ">
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
                    <div className="h-screen w-full pt-32 px-4">
                        <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
                            <Disclosure as="div" className="p-6" defaultOpen={true}>
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                                        What is your refund policy?
                                    </span>
                                    <Image
                                        src="/images/down.svg"
                                        width={20}
                                        height={20}
                                        alt="not found "
                                        className="group-data-[open]:rotate-180"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                                    If you're unhappy with your purchase, we'll refund you in full.
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="p-6">
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                                        Do you offer technical support?
                                    </span>
                                    <Image
                                        src="/images/down.svg"
                                        width={20}
                                        height={20}
                                        alt="not found "
                                        className="group-data-[open]:rotate-180"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
                            </Disclosure>
                        </div>
                    </div>
                </div>
                {/* Report Option  */}
                <div className="bg-red-100 w-[312px]">

                </div>

            </section>
        </PrimaryLayout>
    )
}

export default SurveySetting
