import React from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import ReportTable from '@/components/reports/reportTable'

const Reports = () => {
    const links = [
        { href: '/settings', label: 'Settings' },
        { href: '/support', label: 'Support' },
        { href: '/license', label: 'License' },
    ]

    const reportsTableHeading = [
        {
            heading:"Survey Title",
            icon:"images/sort-order-icon.svg"
        },
        {
            heading:"Created",
            icon:"images/sort-order-icon.svg"
        },
        {
            heading:"Loaded",
            icon:"images/sort-order-icon.svg"
        },
        {
            heading:"Responses",
            icon:"images/sort-order-icon.svg"
        },
        {
            heading:"Status",
            icon:"images/sort-order-icon.svg"
        },
        {
            heading:"Actions",
            icon:"images/sort-order-icon.svg"
        },
    ]
    const reportsDataTable = [
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 0, responses: 0, status: 'Inactive', statusColor: 'bg-orange-400' },
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 0, responses: 0, status: 'Active', statusColor: 'bg-green-500' },
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 3, responses: 1, status: 'Deleted', statusColor: 'bg-red-700' },
    ]

    const showItems = [
        { item: 2 },
        { item: 5 },
        { item: 10 },
    ]


    return (
        <PrimaryLayout>
            <section className="bg-white-smoke w-full p-6">
                {/* Heading  */}
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-black-primary">Reports</h5>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="font-medium text-base text-black-primary">Survey Status</div>
                        <Menu>
                            <MenuButton className="bg-white group border border-borderPrimary rounded-md py-3 px-4 flex items-center justify-between w-[9.125rem] h-[44px] text-black-primary">
                                All
                                <Image
                                    src="/images/down.svg"
                                    width={16}
                                    height={16}
                                    alt="not found"
                                    className="group-data-[open]:rotate-180"
                                />
                            </MenuButton>
                            <MenuItems anchor="bottom" className="bg-white w-[9.125rem] border border-borderPrimary rounded-md mt-2 text-black-primary py-2">
                                {links.map((link) => (
                                    <MenuItem key={link.href} className="block data-[focus]:bg-primary-red py-2 px-4">
                                        <a href={link.href}>{link.label}</a>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                {/* Table  */}
                <div className="w-full mt-5 rounded-lg">
                    {/* Table Header */}
                    <table className="w-full text-left bg-white">
                        <thead>
                            <tr className="bg-snowbank *:text-gray-light *:font-medium">
                                {
                                    reportsTableHeading.map((item, index)=>(
                                        <th className={`py-4 ${index === 0 ? 'pl-24' : ''}`} key={index}>
                                            <div className="flex gap-2">
                                                {item.heading}
                                                <Image
                                                    src={item.icon}
                                                    width={12}
                                                    height={20}
                                                    alt="not found"
                                                />
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {
                                reportsDataTable.map((item, index) => (
                                    <ReportTable
                                        key={index}
                                        title={item.title}
                                        created={item.created}
                                        loaded={item.loaded}
                                        responses={item.responses}
                                        statusColor={item.statusColor}
                                        status={item.status}
                                    />
                                ))
                            }
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-8">
                        <div className="font-normal">2 out of 10 pages (8 items)</div>
                        <div className="flex items-center gap-3">
                            <button className="bg-white rounded-lg p-3 border border-borderPrimary hover hover-secondary">
                                <Image
                                    src="/images/down.svg"
                                    alt="previous"
                                    width={20}
                                    height={20}
                                    className="rotate-90"
                                />
                            </button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg">1</button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg bg-white">2</button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg">3</button>
                            <span>...</span>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-md">10</button>
                            <button className="bg-white rounded-lg p-3 border border-borderPrimary hover hover-secondary">
                                <Image
                                    src="/images/down.svg"
                                    alt="previous"
                                    width={20}
                                    height={20}
                                    className="-rotate-90"
                                />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p>Items per page</p>
                            <Menu>
                                <MenuButton className="bg-white group border border-borderPrimary rounded-lg py-[10px] pl-4 pr-[11px] flex items-center justify-between w-[70px] h-[44px] text-black-primary">
                                    8
                                    <Image
                                        src="/images/down.svg"
                                        width={16}
                                        height={16}
                                        alt="not found"
                                        className="group-data-[open]:rotate-180"
                                    />
                                </MenuButton>
                                <MenuItems anchor="bottom" className="bg-white w-[70px] border border-borderPrimary rounded-md text-black-primary py-2">
                                    {showItems.map((items, index) => (
                                        <MenuItem key={index} className="block data-[focus]:bg-primary-red py-2 pl-4 pr-[11px]">
                                            <button className="w-full">{items.item}</button>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </section>
        </PrimaryLayout>
    )
}

export default Reports
