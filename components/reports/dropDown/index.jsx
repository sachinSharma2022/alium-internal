import { useState } from 'react'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'

const DropDown = ({ title, types, custClass1, custClass2, width, height, disable, title2 }) => {

    const [isDisabled, setIsDisabled] = useState(disable)

    return (
        <>
            <Menu>
                <MenuButton
                    className={`group border border-borderPrimary flex items-center justify-between text-black-primary ${custClass1} ${isDisabled ? "bg-snowbank text-gray-light" : "bg-white"}`}
                    disabled={isDisabled}
                >
                    {title}
                    {
                        title2 && (
                            <span className="truncate overflow-hidden whitespace-nowrap">
                                {title2}
                            </span>
                        )
                    }
                    <Image
                        src="/images/down.svg"
                        width={width}
                        height={height}
                        alt="not found"
                        className="group-data-[open]:rotate-180"
                    />
                </MenuButton>
                <MenuItems anchor="bottom" className={`border border-borderPrimary text-black-primary ${custClass2}`}>
                    {types.map((type, index) => (
                        <MenuItem key={index} className="block data-[focus]:bg-primary-red py-2 px-4">
                            <a href={type.href}>{type.label}</a>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </>
    )
}

export default DropDown
