import React from 'react'
import { NavLink } from 'react-router-dom';

export const News = () => {
    return (
        <div className="flex flex-col">
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/news/news-feed"
                exact>
                News Feed
            </NavLink>
            <NavLink
                className="flex-auto hover:bg-gray-400"
                activeClassName="bg-green-500"
                to="/news/recently-modified-matters"
                exact>
                Recently Modified Matters
            </NavLink>
        </div>
    )
}
