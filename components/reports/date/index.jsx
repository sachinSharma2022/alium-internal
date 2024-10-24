import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Icon from '@/components/ui/icon'

const Date = () => {
    return (
        <Popover className="group">
            <PopoverButton className="flex items-center border border-borderPrimary rounded-lg py-3 px-4 font-semibold text-black-primary w-full focus:outline-none">
                <figure className="mr-3">
                    <Icon 
                    name="calendarTimes"
                    color="#111111"
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
