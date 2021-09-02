import React from 'react'

export const Navbar = () => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div class="flex space-x-4 ...">
                <div class="flex-1 ...">Tasks</div>
                <div class="flex-1 ...">Documents</div>
                <div class="flex-1 ...">Clients</div>
            </div>
        </div>
    )
}
