import React from 'react'
import { Tabbar } from '../tabbar/Tabbar'

export const TaskList = () => {
    return (
        <div>
            <h1 className="text-3xl">Task List</h1>
            <div className="flex justify-center">
                <Tabbar></Tabbar>
            </div>
            <div className="flex"></div>
            <button className="flex-auto hover:bg-blue-500">
                Show Task List For:
            </button>
            
            {/* Render Task List for selected employee below */}
        </div>
    )
}
