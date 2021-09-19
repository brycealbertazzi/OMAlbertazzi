import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tabbar = () => {
    return (
        <div className="flex flex-col md:flex-row my-12 p-4 gap-3 border-2 w-1/2 bg-gray-700">
            <NavLink
                className="flex-auto btn btn-tabbar"
                to="/time-slip"
                exact
                >
                Time Slip
            </NavLink>
            <NavLink
                className="flex-auto btn btn-tabbar"
                to="/log-note"
                exact
                >
                Log Note
            </NavLink>
            <NavLink
                className="flex-auto btn btn-tabbar"
                to="/task"
                exact
                >
                Task
            </NavLink>
            <NavLink
                className="flex-auto btn btn-tabbar"
                to="/details"
                exact
                >
                Details
            </NavLink>
        </div>
    )
}
