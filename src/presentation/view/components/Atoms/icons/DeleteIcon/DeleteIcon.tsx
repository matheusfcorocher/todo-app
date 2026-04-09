import React from 'react';
import './delete-icon.css';
import deleteIcon from '../../../../assets/icons/delete.svg';

function DeleteIcon() {
    return (
        <img 
            src={deleteIcon} 
            className="delete-icon" 
            alt="delete" 
        />
    );
}

export default DeleteIcon;
