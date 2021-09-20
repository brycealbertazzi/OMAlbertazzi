import React from 'react'
import { NavLink } from 'react-router-dom';

export const News = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <NavLink
                className="flex-auto btn btn-regular w-1/2"
                activeClassName="bg-green-500"
                to="/news/news-feed"
                exact>
                News Feed
            </NavLink>
            <NavLink
                className="flex-auto btn btn-regular w-1/2"
                activeClassName="bg-green-500"
                to="/news/recently-modified-matters"
                exact>
                Recently Modified Matters
            </NavLink>
        </div>
    )
}
