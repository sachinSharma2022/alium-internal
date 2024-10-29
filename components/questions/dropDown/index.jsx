import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Icons } from '@/components/ui/icon'

const DropDown = ({label, title, language}) => {
  return (
    <Popover className="group space-y-2 mb-6">
      <h6 className="text-black-primary text-base">{label}</h6>
      <PopoverButton className="flex items-center justify-between w-full border border-borderPrimary rounded-lg px-4 py-3">
        {title}
        <Icons.arrowDown className="size-5 group-data-[open]:rotate-180" />
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col w-[568px] bg-white border border-borderPrimary rounded-lg px-4 py-3 mt-3">
        <ul>
          {
            language.map((item,index) => (
              <li key={index}>{item.lang}</li>
            ))
          }
        </ul>
      </PopoverPanel>
    </Popover>
  )
}

export default DropDown
