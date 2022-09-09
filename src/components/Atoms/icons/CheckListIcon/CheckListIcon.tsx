import React, { useState } from 'react';
import '../../../../App';

interface CheckListIconProps {
    className?: string,
}

function CheckListIcon({ className }: CheckListIconProps) {
    return (
        <svg 
            role="image"
            className={`${className}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 64 64" 
            preserveAspectRatio='none'
        >
            <path d="M54 64a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9.764l-2.447-4.895A2 2 0 0 0 40 0H24a2 2 0 0 0-1.789 1.105L19.764 6H10a2 2 0 0 0-2 2v54a2 2 0 0 0 2 2h44zM25.236 4h13.527l4 8H21.236l4-8zM12 10h5.764l-1.553 3.105A2.001 2.001 0 0 0 18 16h28.02a2 2 0 0 0 1.653-3.126L46.236 10H52v50H12V10z" fill="" />
            <path d="M38.586 28.586 30 37.171l-4.586-4.585a2 2 0 1 0-2.828 2.828l6 6c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l10-10a2 2 0 1 0-2.828-2.828z" fill="" />
        </svg>
    );
}

export default CheckListIcon;
