import React from 'react'

export const LogNote = () => {
    return (
        <div>
            <div className="flex items-center mb-16">
                <h1 className="flex-auto text-3xl">New Log Note</h1>
            </div>
            <div className="flex flex-col items-center my-12 gap-y-8 gap-x-4 text-2xl">
                <div className="flex-auto activity-date">
                    <h1>Activity Date</h1>
                </div>
                <div className="flex-auto due-date">
                    <h1>Due Date</h1>
                </div>
                <div className="flex-auto activity-type">
                    <h1>Activity Type</h1>
                </div>
                <div className="flex-auto assigned-to">
                    <h1>Assigned To</h1>
                </div>
                <div className="flex-auto description">
                    <h1>Description</h1>
                </div>
                <div className="flex-auto save">
                    <button className="btn btn-regular">Save New Log Note</button>
                </div>
            </div>
        </div>
    )
}
