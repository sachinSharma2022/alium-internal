import React from 'react'
import Icon from '@/components/ui/icon'


const ProcessTable = () => {
    return (
        <div className="border border-borderPrimary rounded-lg overflow-hidden mt-[10px]">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-white-smoke">
                        <th className="px-3 py-2 text-left text-[12px] font-semibold text-black-primary border border-borderPrimary">
                            Categories
                        </th>
                        <th className="px-3 py-2 text-left text-[12px] font-semibold text-black-primary border border-borderPrimary">
                            Subcategories
                        </th>
                        <th className="px-3 py-2 text-[12px] font-semibold text-black-primary border border-borderPrimary text-left">
                            No. of Responses
                            <span className="inline-block float-right">
                                <Icon
                                    name="sorting"
                                    color="#3B37FF"
                                />
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="3" className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary whitespace-nowrap bg-white-smoke text-left font-semibold">Employee Feedback</th>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Pricing</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">32</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Work Environment</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">12</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Management Support</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">42</td>
                    </tr>
                    <tr>
                        <th rowspan="2" className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold whitespace-nowrap bg-white-smoke text-left">Event Feedback</th>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Venue</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">22</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Speaker Quality</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">8</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold whitespace-nowrap text-left bg-white-smoke">Website Feedback</td>
                        <td className="px-3 py-2 text-[12px] text-black-primary border border-borderPrimary font-semibold bg-white-smoke">Career Development</td>
                        <td className="px-3 py-2 text-[12px] text-center text-black-primary border border-borderPrimary">25</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ProcessTable
