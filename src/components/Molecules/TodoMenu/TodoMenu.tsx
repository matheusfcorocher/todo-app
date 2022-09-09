import React, { useState } from 'react';
import '../../../App.css';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import ListIcon from '../../Atoms/icons/ListIcon/ListIcon';
import './todolist.css';

interface TodoMenuProps {
    handleCreateTodo: () => void;
}

function TodoMenu({ handleCreateTodo }: TodoMenuProps) {
    return (
        <div className={`todo-menu`}>
            <button className={`complete-button`} >
                <CheckListIcon />
                {/* <ListIcon /> */}
            </button>
            <input
                type="text"
                role="textbox"
                placeholder='What needs to be done?'
                value={''}
                name="title"
                className={`title-input`}
                onChange={() => handleCreateTodo()}
            />
        </div>
    );
}

export default TodoMenu;
