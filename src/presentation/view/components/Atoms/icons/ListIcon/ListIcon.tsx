import React, { useState } from 'react';

interface ListIconProps {
    className?: string,
}

function ListIcon({ className }: ListIconProps) {
    return (
        <svg role="image" className={`${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" preserveAspectRatio='none'>
            <path d="m44.236 6-2.447-4.895A2.002 2.002 0 0 0 40 0H24c-.757 0-1.45.428-1.789 1.105L19.764 6H10a2 2 0 0 0-2 2v54a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9.764zm-19-2h13.528l4 8H21.236l4-8zM52 60H12V10h5.764l-1.553 3.105A1.999 1.999 0 0 0 18 16h28.02a2 2 0 0 0 1.653-3.126L46.236 10H52v50z" fill="" />
            <path d="M46 22H28a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4zM46 32H28a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4zM46 42H28a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4zM46 52H28a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4zM20 22h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4zM20 32h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4zM20 42h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4zM20 52h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4z" fill="" />
        </svg>
    );
}

export default ListIcon;
