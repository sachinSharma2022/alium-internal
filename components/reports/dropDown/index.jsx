import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'

const DropDown = ({title,types,custClass1, custClass2}) => {

  return (
    <div>
          <Menu>
              <MenuButton className={`bg-white group border border-borderPrimary flex items-center justify-between text-black-primary ${custClass1}`}>
                  {title}
                  <Image
                      src="/images/down.svg"
                      width={16}
                      height={16}
                      alt="not found"
                      className="group-data-[open]:rotate-180"
                  />
              </MenuButton>
              <MenuItems anchor="bottom" className={`bg-white border border-borderPrimary text-black-primary ${custClass2}`}>
                  {types.map((type, index) => (
                      <MenuItem key={index} className="block data-[focus]:bg-primary-red py-2 px-4">
                          <a href={type.href}>{type.label}</a>
                      </MenuItem>
                  ))}
              </MenuItems>
          </Menu>
    </div>
  )
}

export default DropDown
