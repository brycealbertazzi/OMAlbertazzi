import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    // Home, Time Sheet, Task List, News, Admin
    return (
        <div className="container mx-auto">
            <div className="flex bg-gray-200">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/time-sheet'>Time Sheet</Link>
                </li>
                <li>
                    <Link to='/task-list'>Task List</Link>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
                <li>
                    <Link to='/admin'>Admin</Link>
                </li>
            </div>
        </div>
    )
}
