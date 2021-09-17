import React from 'react'
import { Tabbar } from './tabbar/Tabbar'

export const Home = () => {
    return (
        <div>
            <Tabbar></Tabbar>
            <div className="flex">
                <button className="flex-auto hover:bg-blue-500">Contact Search</button>
                <button className="flex-auto hover:bg-blue-500">Matter Search</button>
            </div>
            <div className="flex">
                <button className="flex-auto hover:bg-blue-500">Active Matters</button>
                <button className="flex-auto hover:bg-blue-500">Task List</button>
                <button className="flex-auto hover:bg-blue-500">Time Sheet</button>
            </div>
            <div className="flex flex-col">
                <button className="flex-auto hover:bg-blue-500">Recently Modified Matters</button>
                <button className="flex-auto hover:bg-blue-500">SharePoint Search</button>
            </div>
        </div>
    )
}
