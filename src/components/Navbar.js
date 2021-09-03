import React from 'react'

export const Navbar = () => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div className="flex space-x-4 ...">
                <div className="flex-1 ...">Tasks</div>
                <div className="flex-1 ...">Documents</div>
                <div className="flex-1 ...">Clients</div>
            </div>
        </div>
    )
}
