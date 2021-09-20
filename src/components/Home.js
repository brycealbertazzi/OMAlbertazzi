import React from 'react'
import { Tabbar } from './tabbar/Tabbar'

export const Home = () => {
    return (
        <div>
            <div className="flex justify-center">
                <Tabbar></Tabbar>
            </div>
            <div className="flex gap-8 my-8">
                <button className="flex-auto btn btn-regular">Contact Search</button>
                <button className="flex-auto btn btn-regular">Matter Search</button>
            </div>
            <div className="flex gap-8 my-8">
                <button className="flex-auto btn btn-regular">Active Matters</button>
                <button className="flex-auto btn btn-regular">Task List</button>
                <button className="flex-auto btn btn-regular">Time Sheet</button>
            </div>
            <div className="flex flex-col gap-8 my-8 items-center">
                <button className="flex-auto btn btn-regular w-1/3">Recently Modified Matters</button>
                <button className="flex-auto btn btn-regular w-1/3">SharePoint Search</button>
            </div>
        </div>
    )
}
