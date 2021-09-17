import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tabbar = () => {
    return (
        <div className="flex">
            <NavLink
                className="flex-auto hover:bg-blue-400"
                to="/time-slip"
                exact
                >
                Time Slip
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-blue-400"
                to="/log-note"
                exact
                >
                Log Note
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-blue-400"
                to="/task"
                exact
                >
                Task
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-blue-400"
                to="/details"
                exact
                >
                Details
            </NavLink>
        </div>
    )
}
