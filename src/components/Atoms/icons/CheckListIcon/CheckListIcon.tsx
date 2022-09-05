import React, { useState } from 'react';
import '../../../../App';
import './checklist.css';
import checkList from '../../../../assets/icons/check-list-icon.svg';

function CheckListIcon() {
    return (
        <img
            src={checkList}
            role="image"
            className="check-icon"
            alt="check-all-icon"
        />
    );
}

export default CheckListIcon;
