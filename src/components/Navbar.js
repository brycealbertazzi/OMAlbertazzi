import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    // Home, Time Sheet, Task List, News, Admin
    return (
        <div className="flex mx-3 my-8 py-4 gap-4 border-b-2">
            <NavLink
                className="flex-auto btn btn-main"
                activeClassName="text-black"
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                className="flex-auto btn btn-main"
                activeClassName="text-black"
                to="/time-sheet"
                exact
            >
                Time Sheet
            </NavLink>
            <NavLink
                className="flex-auto btn btn-main"
                activeClassName="text-black"
                to="/task-list"
                exact
            >
                Task List
            </NavLink>
            <NavLink
                className="flex-auto btn btn-main"
                activeClassName="text-black"
                to="/news"
                exact
            >
                News
            </NavLink>
            <NavLink
                className="flex-auto btn btn-main"
                activeClassName="text-black"
                to="/admin"
                exact
            >
                Admin
            </NavLink>
        </div>
    )
}
