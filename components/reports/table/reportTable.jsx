import React from 'react'
import Link from 'next/link'

const ReportTable = ({ title, created, loaded, responses, statusColor, status }) => {
    return (
        <>
            <tr className="border-t hover:border hover:border-borderPrimary">
                <td className="flex items-center gap-8 py-3 px-6">
                    <div className="bg-powder-puff text-wild-strawberry w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        ST
                    </div>
                    <span className="font-semibold text-black-primary">{title}</span>
                </td>
                <td className="py-3 font-medium text-gray-light">{created}</td>
                <td className="py-3 font-medium text-gray-light">{loaded}</td>
                <td className="py-3 font-medium text-gray-light">{responses}</td>
                <td className="py-3 font-medium text-gray-light">
                    <div className="flex items-center gap-[10px]">
                        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
                        <span>{status}</span>
                    </div>
                </td>
                <td className=" text-primary-blue font-semibold cursor-pointer">
                    <Link href="reports/survey-setting">View Responses</Link>
                </td>
            </tr>
        </>
    )
}

export default ReportTable
