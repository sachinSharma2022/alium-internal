import React from 'react'
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

const DisclosureItem = ({title, children}) => {
  return (
    <div className="border border-borderPrimary rounded-lg">
      <Disclosure>
        <div className="ankur">
          <DisclosureButton className="flex justify-between w-full py-4 px-5 group">
            <h6 className="text-black-primary">{title}</h6>
            <Image
              src="/images/down.svg"
              width={20}
              height={20}
              alt="not found "
              className="group-data-[open]:rotate-180"
            />
          </DisclosureButton>
          <DisclosurePanel className="px-5 pb-4">
              {children}
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  )
}

export default DisclosureItem
