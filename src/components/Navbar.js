import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    // Home, Time Sheet, Task List, News, Admin
    return (
        <div className="flex bg-gray-200">
            {/* <h1 className="flex-auto hover:bg-gray-400">
                <Link to='/'>Home</Link>
            </h1>
            <h1 className="flex-auto hover:bg-gray-400">
                <Link to='/time-sheet'>Time Sheet</Link>
            </h1>
            <h1 className="flex-auto hover:bg-gray-400">
                <Link to='/task-list'>Task List</Link>
            </h1>
            <h1 className="flex-auto hover:bg-gray-400">
                <Link to='/news'>News</Link>
            </h1>
            <h1 className="flex-auto hover:bg-gray-400">
                <Link to='/admin'>Admin</Link>
            </h1> */}
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/time-sheet"
                exact
            >
                Time Sheet
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/task-list"
                exact
            >
                Task List
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/news"
                exact
            >
                News
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/admin"
                exact
            >
                Admin
            </NavLink>
        </div>
    )
}
