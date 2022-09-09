import React, { useState } from 'react';
import '../../../App.css';
import IconButton from '../../Atoms/IconButton/IconButton';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import ListIcon from '../../Atoms/icons/ListIcon/ListIcon';
import './todolist.css';

interface TodoMenuProps {
    handleCreateTodo: () => void;
    isAllTodosCompleted: boolean;
}

function TodoMenu({ handleCreateTodo, isAllTodosCompleted }: TodoMenuProps) {
    return (
        <div className={`todo-menu`}>
            {
                    isAllTodosCompleted?
                    (<IconButton handleFunction={function (): void {
                        throw new Error('Function not implemented.');
                    } }>
                        <ListIcon />
                    </IconButton>)
                    :
                    (<IconButton handleFunction={function (): void {
                        throw new Error('Function not implemented.');
                    } }>
                        <CheckListIcon />
                    </IconButton>)
            }
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
