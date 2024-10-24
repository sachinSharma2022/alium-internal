import { useState } from 'react'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Icon from '@/components/ui/icon'
import Image from 'next/image'

const DropDown = ({ title, types, custClass1, custClass2, width, height, disable, title2, dropDownImg, border }) => {

    const [isDisabled, setIsDisabled] = useState(disable)

    const [showBorder, setShowBorder] = useState(border)

    return (
        <>
            <Menu>
                <MenuButton
                    className={`group border border-borderPrimary flex items-center justify-between text-black-primary ${custClass1} ${isDisabled ? "bg-snowbank text-gray-light" : "bg-white"}`}
                    disabled={isDisabled}
                >
                    <div className="flex items-center gap-2">
                        {
                            dropDownImg && (
                                <span className="">
                                    <Image
                                        src={dropDownImg}
                                        width={20}
                                        height={20}
                                        alt="not found"
                                    />
                                </span>
                            )
                        }
                        {title}
                        {
                            title2 && (
                                <span className="truncate overflow-hidden whitespace-nowrap w-52">
                                    {title2}
                                </span>
                            )
                        }
                    </div>
                    <Icon
                        name="arrowDown"
                        className="group-data-[open]:rotate-180 transition-transform"
                    />
                </MenuButton>
                <MenuItems anchor="bottom" className={`border border-borderPrimary text-black-primary ${custClass2}`}>
                    {types.map((type, index) => (
                        <MenuItem key={index} className={`flex gap-3 data-[focus]:bg-primary-red py-2 px-4 ${border ? "border-b border-borderPrimary !px-0 py-4" : ""}`}>
                            <a href={type.href}>
                                {type.pieIcon && (
                                    <Image
                                        src={type.pieIcon}
                                        width={20}
                                        height={20}
                                        alt="not found"
                                    />
                                )}
                                {type.label}
                            </a>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </>
    )
}

export default DropDown
