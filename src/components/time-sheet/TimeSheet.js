import React from 'react'
import { Tabbar } from '../tabbar/Tabbar'

export const TimeSheet = () => {
    return (
        <div>
            <h1 className="text-3xl">Time Sheet</h1>
            <Tabbar></Tabbar>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
                <button className="flex-auto w-28 btn btn-weekday">Sunday</button>
                <button className="flex-auto w-28 btn btn-weekday">Monday</button>
                <button className="flex-auto w-28 btn btn-weekday">Tuesday</button>
                <button className="flex-auto w-28 btn btn-weekday">Wednesday</button>
                <button className="flex-auto w-28 btn btn-weekday">Thursday</button>
                <button className="flex-auto w-28 btn btn-weekday">Friday</button>
                <button className="flex-auto w-28 btn btn-weekday">Saturday</button>
            </div>

            {/* Render time slips on the selected day of week of the current week below */}
        </div>
    )
}
