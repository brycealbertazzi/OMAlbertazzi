import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

export const Admin = () => {
    const [isIncome, setIsIncome] = useState(true);

    return (
        <div>
            <h1 className="my-4">Admin Reports</h1>
            <div className="tabs flex justify-items-center my-3">
                <button className="flex-1 hover:bg-blue-300 border border-gray-600" onClick={() => setIsIncome(true)}>Income</button>
                <button className="flex-1 hover:bg-blue-300 border border-gray-600" onClick={() => setIsIncome(false)}>Time Totals</button>
            </div>
            {isIncome ?
            <table className="table-fixed flex border-separate border border-gray-300">
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
            <table className="flex flex-col table-fixed border border-gray-300">
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
            <div className="flex flex-col">
                <NavLink
                    className="flex-auto hover:bg-gray-400"
                    activeClassName="bg-green-500"
                    to="/admin/data-tracking"
                    exact>
                    Data Tracking
                </NavLink>
                <NavLink
                    className="flex-auto hover:bg-gray-400"
                    activeClassName="bg-green-500"
                    to="/admin/time-report"
                    exact>
                    Time Report
                </NavLink>
                <NavLink
                    className="flex-auto hover:bg-gray-400"
                    activeClassName="bg-green-500"
                    to="/admin/recent-finance"
                    exact>
                    Recent Finance
                </NavLink>
            </div>
        </div>
    )
}
