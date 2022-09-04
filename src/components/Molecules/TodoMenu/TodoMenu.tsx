import React, { useState } from 'react';
import '../../../App.css';
import './todolist.css';
import checkList from '../../../assets/icons/check-list-icon.svg';

function TodoMenu() {
    return (
        <div className={`todo-menu`}>
            <button className={`complete-button`} >
                <img
                    src={checkList}
                    className="check-icon"
                    alt="check-all-icon"
                />
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
