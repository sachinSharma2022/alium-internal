import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Icons } from '@/components/ui/icon'

const RightSidebar = () => {
  return (
      <div className="flex">
          <Disclosure defaultOpen={true}>
              <DisclosureButton className="py-2 group flex items-center">
                  <Icons.arrowDown
                      className="group-data-[open]:-rotate-90 rotate-90 text-[#969696] w-4 h-4"
                  />
              </DisclosureButton>
              <DisclosurePanel
                  transition
                  className="text-gray-500 w-[312px] bg-red-400 min-h-[calc(100vh-92px)] flex-shrink-0 p-6 origin-top transition duration-200 ease-out data-[closed]:-translate-x-6 data-[closed]:opacity-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem sequi architecto velit? Ad natus, enim, quisquam ratione totam error, et dolorum neque esse praesentium harum. Perspiciatis unde vitae laudantium ullam soluta hic, id debitis qui nemo rerum saepe distinctio. Dolores dolorum beatae, molestias magni praesentium quasi ullam 
              </DisclosurePanel>
          </Disclosure>
      </div>
  )
}

export default RightSidebar
