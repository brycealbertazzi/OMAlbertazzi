import React from 'react'

export const TimeSlip = () => {
    return (
        <div>
            <div className="flex items-center mb-16">
                <h1 className="flex-auto text-3xl">New Time Slip</h1>
            </div>
            <div className="flex flex-col items-center my-12 gap-y-8 gap-x-4 text-2xl">
                <div className="flex-auto work-date">
                    <h1>Work Date</h1>
                </div>
                <div className="flex-auto time-keeper">
                    <h1>Timekeeper</h1>
                </div>
                <div className="flex-auto description">
                    <h1>Description</h1>
                </div>
                <div className="flex-auto time">
                    <h1>Time</h1>
                </div>
                <div className="flex-auto save">
                    <button className="btn btn-regular">Save New Time Slip</button>
                </div>
            </div>
        </div>
        
    )
}
