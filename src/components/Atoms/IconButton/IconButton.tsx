import React, { useState } from 'react';
import '../../../App';
import './icon-button.css';

interface IconButtonProps {    
    handleFunction: () => void,
    children: React.ReactNode,
    className?: string,
}

function IconButton({
    handleFunction,
    children,
    className
}: IconButtonProps) {
    return (
        <button
            className={`icon-button ${className}`}
            onClick={() => handleFunction}
            role="button"
        >
            {children}
        </button>
    );
}

export default IconButton;
