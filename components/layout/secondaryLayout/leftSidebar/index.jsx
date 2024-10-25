import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Icons } from '@/components/ui/icon'

const LeftSidebar = () => {
    return (
        <div className="flex">
            <Disclosure defaultOpen={true}>
                <DisclosurePanel
                    transition
                    className="text-gray-500 w-[312px] bg-red-200 min-h-[calc(100vh-92px)] flex-shrink-0 p-6 origin-top transition duration-200 ease-out data-[closed]:-translate-x-6 data-[closed]:opacity-0">
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
                <DisclosureButton className="py-2 group flex items-center">
                    <Icons.arrowDown
                        className="group-data-[open]:rotate-90 -rotate-90 text-[#969696] w-4 h-4"
                    />
                </DisclosureButton>
            </Disclosure>
        </div>
    )
}

export default LeftSidebar
