import React from 'react'
import { Tabbar } from '../tabbar/Tabbar'

export const TimeSheet = () => {
    return (
        <div>
            <h1>Time Sheet</h1>
            <Tabbar></Tabbar>
            <div className="flex">
                <button className="flex-auto hover:bg-blue-500">Sunday</button>
                <button className="flex-auto hover:bg-blue-500">Monday</button>
                <button className="flex-auto hover:bg-blue-500">Tuesday</button>
                <button className="flex-auto hover:bg-blue-500">Wednesday</button>
                <button className="flex-auto hover:bg-blue-500">Thursday</button>
                <button className="flex-auto hover:bg-blue-500">Friday</button>
                <button className="flex-auto hover:bg-blue-500">Saturday</button>
            </div>

            {/* Render time slips on the selected day of week of the current week below */}
        </div>
    )
}
