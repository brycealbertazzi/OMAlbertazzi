import React from 'react'
import { Tabbar } from './tabbar/Tabbar'

export const Home = () => {
    return (
        <div>
            <div className="flex justify-center">
                <Tabbar></Tabbar>
            </div>
            <div className="flex gap-8 my-8">
                <button className="flex-auto btn btn-main">Contact Search</button>
                <button className="flex-auto btn btn-main">Matter Search</button>
            </div>
            <div className="flex gap-8 my-8">
                <button className="flex-auto btn btn-main">Active Matters</button>
                <button className="flex-auto btn btn-main">Task List</button>
                <button className="flex-auto btn btn-main">Time Sheet</button>
            </div>
            <div className="flex flex-col gap-8 my-8 items-center">
                <button className="flex-auto btn btn-main w-1/3">Recently Modified Matters</button>
                <button className="flex-auto btn btn-main w-1/3">SharePoint Search</button>
            </div>
        </div>
    )
}
