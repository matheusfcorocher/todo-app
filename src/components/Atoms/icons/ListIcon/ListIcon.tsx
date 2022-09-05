import React, { useState } from 'react';
import '../../../../App';
import './list.css';
import listIcon from '../../../../assets/icons/list-icon.svg';

function ListIcon() {
    return (
        <img 
            src={listIcon} 
            role="image"
            className="list-icon" 
            alt="list-icon" 
        />
    );
}

export default ListIcon;
