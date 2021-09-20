import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

export const Admin = () => {
    const [isIncome, setIsIncome] = useState(true);

    return (
        <div>
            <h1 className="my-8 text-3xl">Admin Reports</h1>
            <div className="tabs flex flex-col sm:flex-row my-3 gap-x-8 gap-y-4 sm:px-10 md:px-20 lg:px-30 xl:px-40">
                <button className="flex-auto btn btn-regular" onClick={() => setIsIncome(true)}>Income</button>
                <button className="flex-auto btn btn-regular" onClick={() => setIsIncome(false)}>Time Totals</button>
            </div>
            {isIncome ?
            <table className="table-fixed flex border-separate border border-gray-300 text-lg my-12">
                <tbody className="flex-auto border border-gray-500">
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Today</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">This Week</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Last Week</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">This Month</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Last Month</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Year To Date</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Last Year</td>
                        <td className="flex-auto w-1/4">0</td>
                    </tr>
                    <tr className="flex">
                        <td className="flex-auto w-3/4">Projected Percentage</td>
                        <td className="flex-auto w-1/4">0%</td>
                    </tr>
                </tbody>
            </table>
            :
            <table className="flex flex-col table-fixed border border-gray-300 text-lg my-12">
                <thead className="flex-auto">
                    <tr className="flex">
                        <th className="flex-auto">Date</th>
                        <th className="flex-auto">Time Keeper</th>
                        <th className="flex-auto">Hours</th>
                    </tr>
                </thead>
                <tbody className="flex-auto border border-gray-500">
                    <tr className="flex">
                        <td className="flex-auto">Sample 1</td>
                        <td className="flex-auto">Sample 2</td>
                        <td className="flex-auto">Sample 3</td>
                    </tr>
                </tbody>
            </table>
            }
            {/* Data Tracking, Time Report, Recent Finance */}
            <div className="flex flex-col gap-4 items-center mt-8">
                <NavLink
                    className="flex-auto btn btn-regular w-1/2"
                    activeClassName=""
                    to="/admin/data-tracking"
                    exact>
                    Data Tracking
                </NavLink>
                <NavLink
                    className="flex-auto btn btn-regular w-1/2"
                    activeClassName=""
                    to="/admin/time-report"
                    exact>
                    Time Report
                </NavLink>
                <NavLink
                    className="flex-auto btn btn-regular w-1/2"
                    activeClassName=""
                    to="/admin/recent-finance"
                    exact>
                    Recent Finance
                </NavLink>
            </div>
        </div>
    )
}
