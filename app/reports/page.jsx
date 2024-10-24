"use client"
import React from 'react'
import PrimaryLayout from '@/components/layout/primaryLayout'
import Image from 'next/image'
import ReportTable from '@/components/reports/table/reportTable'
import DropDown from '@/components/reports/dropDown'
import Icon from '@/components/ui/icon'

const Reports = () => {

    // DropDown 
    const reportsType = [
        { href: '/settings', label: 'Settings' },
        { href: '/support', label: 'Support' },
        { href: '/license', label: 'License' },
    ]

    // DropDown show Pages 
    const pageItems = [
        { label: 2 },
        { label: 5 },
        { label: 10 },
    ]

    const reportsTableHeading = [
        { heading: "Survey Title" },
        { heading: "Created" },
        { heading: "Loaded" },
        { heading: "Responses" },
        { heading: "Status" },
        { heading: "Actions" },
    ]
    const reportsDataTable = [
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 0, responses: 0, status: 'Inactive', statusColor: 'bg-orange-400' },
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 0, responses: 0, status: 'Active', statusColor: 'bg-green-500' },
        { title: 'Survey Title 1', created: '12 Aug 2024', loaded: 3, responses: 1, status: 'Deleted', statusColor: 'bg-red-700' },
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
                        <DropDown
                            title="All"
                            types={reportsType}
                            width="16"
                            height="16"
                            custClass1="py-3 px-4 w-[9.125rem] h-[44px] rounded-md bg-white font-medium"
                            custClass2="py-2 w-[9.125rem] mt-2 rounded-md bg-white"
                        />
                    </div>
                </div>
                {/* Table  */}
                <div className="w-full mt-5">
                    {/* Table Header */}
                    <div className="rounded-t-lg overflow-hidden">
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="bg-snowbank *:text-gray-light *:font-medium">
                                    {
                                        reportsTableHeading.map((item, index) => (
                                            <th className={`py-4 ${index === 0 ? 'pl-24' : ''}`} key={index}>
                                                <div className="flex gap-2 items-center">
                                                    {item.heading}
                                                    {
                                                        index !== reportsTableHeading.length - 1 && (
                                                            <Icon
                                                                name="sorting"
                                                                color="#3B37FF"
                                                            />
                                                        )
                                                    }
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
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-8">
                        <div className="font-normal">2 out of 10 pages (8 items)</div>
                        <div className="flex items-center gap-3">
                            <button className="bg-white rounded-lg p-3 border border-borderPrimary hover hover-secondary ">
                                <Icon
                                    name="arrowDown"
                                    color="#111111"
                                    className="rotate-90"
                                />
                            </button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg">1</button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg bg-white">2</button>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-lg">3</button>
                            <span>...</span>
                            <button className="w-10 h-10 font-medium text-black-primary rounded-md">10</button>
                            <button className="bg-white rounded-lg p-3 border border-borderPrimary hover hover-secondary">
                                <Icon
                                    name="arrowDown"
                                    color="#111111"
                                    className="-rotate-90"
                                />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p>Items per page</p>
                            <DropDown
                                title="8"
                                types={pageItems}
                                width="16"
                                height="16"
                                custClass1=" rounded-lg py-[10px] pl-4 pr-[11px] w-[70px] h-[44px] my-2 bg-white"
                                custClass2=" rounded-lg w-[70px] py-2 mt-2 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </PrimaryLayout>
    )
}

export default Reports
