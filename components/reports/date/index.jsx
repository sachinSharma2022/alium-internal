import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Image from 'next/image'

const Date = () => {
    return (
        <Popover className="group">
            <PopoverButton className="flex items-center border border-borderPrimary rounded-lg py-3 px-4 font-semibold text-black-primary w-full focus:outline-none">
                <figure className="mr-3">
                    <Image
                        src="/images/calendar-time.svg"
                        width={20}
                        height={20}
                        alt="calendar"
                    />
                </figure>
                31/07/2024 - 29/08/2024
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col w-[264px]">
               
            </PopoverPanel>
        </Popover>
    )
}

export default Date
