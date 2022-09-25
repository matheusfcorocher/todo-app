import React, { useState } from 'react';
import { createImmediatelyInvokedFunctionExpression } from 'typescript';
import { handleCreateTodo } from '../../../App';
import '../../../App.css';
import IconButton from '../../Atoms/IconButton/IconButton';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import ListIcon from '../../Atoms/icons/ListIcon/ListIcon';
import './todo-menu.css';

interface TodoMenuProps {
    handleCreateTodo: handleCreateTodo;
    isAllTodosCompleted: boolean;
}

function TodoMenu({ handleCreateTodo, isAllTodosCompleted }: TodoMenuProps) {
    const [title, setTitle] = useState<string>("");

    function handlePress(event : React.KeyboardEvent<HTMLInputElement>) {
        if(event.key == "Enter") {
            handleCreateTodo(title);
            setTitle("");
        }
    }
    
    return (
        <div role="group" className={`todo-menu`}>
            {
                isAllTodosCompleted ?
                    (<IconButton className="complete-button" handleFunction={function (): void {
                        throw new Error('Function not implemented.');
                    }}>
                        <ListIcon className="list-icon" />
                    </IconButton>)
                    :
                    (<IconButton className="complete-button" handleFunction={function (): void {
                        throw new Error('Function not implemented.');
                    }}>
                        <CheckListIcon className="checklist-icon" />
                    </IconButton>)
            }
            <input
                type="text"
                role="textbox"
                placeholder='What needs to be done?'
                value={title}
                name="title"
                className={`title-input`}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(event) => handlePress(event)}
            />
        </div>
    );
}

export default TodoMenu;
