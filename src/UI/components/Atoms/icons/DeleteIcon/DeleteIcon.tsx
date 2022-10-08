import React, { useState } from 'react';
import '../../../../../App';
import './delete-icon.css';
import deleteIcon from '../../../../assets/icons/delete.svg';

function DeleteIcon() {
    return (
        <img 
            src={deleteIcon} 
            role="image" 
            className="delete-icon" 
            alt="delete" 
        />
    );
}

export default DeleteIcon;
