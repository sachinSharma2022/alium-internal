import React, { Children } from 'react'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const ReportHeading = ({ children, img, title, ansNumber, skipNumber }) => {
    return (
        <>
            <Disclosure as="div" className="p-6 mb-5 bg-white rounded-xl" defaultOpen={true}>
                <div className="rounded-xl border border-borderPrimary overflow-hidden">
                    <DisclosureButton className="group flex w-full justify-between bg-primary-red p-5">
                        <h6 className="text-black-primary flex items-start">
                            <figure>
                                <Image
                                    src={img}
                                    width={36}
                                    height={36}
                                    alt="not found"
                                />
                            </figure>
                            <div className="ml-4 flex flex-col">
                                {title}
                                <span className="flex mt-3 gap-3">
                                    <small className="flex gap-2 items-center leading-none">
                                        <span className="edgecase text-gray-light font-normal">Answered:</span>
                                        <span className="text-black-primary font-medium">{ansNumber}</span>
                                    </small>
                                    <small className="flex gap-2 items-center leading-none">
                                        <span className="edgecase text-gray-light font-normal">Skipped:</span>
                                        <span className="text-black-primary font-medium">{skipNumber}</span>
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
                        {children}
                    </DisclosurePanel>
                </div>
            </Disclosure>
        </>
    )
}

export default ReportHeading
