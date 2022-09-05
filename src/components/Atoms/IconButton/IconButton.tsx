import React, { useState } from 'react';
import '../../../App';
import './icon-button.css';

interface IconButtonProps {    
    handleFunction: () => void,
    children: React.ReactNode,
}

function IconButton({
    handleFunction,
    children
}: IconButtonProps) {
    return (
        <button
            className="icon-button"
            onClick={() => handleFunction}
            role="button"
        >
            {children}
        </button>
    );
}

export default IconButton;
