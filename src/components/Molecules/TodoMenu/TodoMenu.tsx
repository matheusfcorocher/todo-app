import React, { useState } from 'react';
import '../../../App.css';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import './todolist.css';

function TodoMenu() {
    return (
        <div className={`todo-menu`}>
            <button className={`complete-button`} >
                <CheckListIcon />
                {/* <img src={list} className="uncheck-icon" alt="uncheck-all-icon" /> */}
            </button>
            <input
                type="text"
                role="textbox"
                placeholder='What needs to be done?'
                value={''}
                name="title"
                className={`title-input`}
                onChange={() => {}}
            />
        </div>
    );
}

export default TodoMenu;
