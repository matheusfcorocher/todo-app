import React, { useState } from 'react';
import './icon-button.css';

interface IconButtonProps {    
    handleFunction: () => void,
    children: React.ReactNode,
    className?: string,
    title?: string,
}

function IconButton({
    handleFunction,
    children,
    className,
    title
}: IconButtonProps) {
    return (
        <button
            title={title}
            className={`icon-button ${className}`}
            onClick={() => handleFunction()}
            role="button"
        >
            {children}
        </button>
    );
}

export default IconButton;
