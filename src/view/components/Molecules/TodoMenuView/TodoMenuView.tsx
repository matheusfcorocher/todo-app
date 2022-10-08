import React, { useState } from 'react';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleIncompleteTodoItems } from '../../../../App';
import IconButton from '../../Atoms/IconButton/IconButton';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import ListIcon from '../../Atoms/icons/ListIcon/ListIcon';
import './todo-menu-view.css';

interface TodoMenuViewProps {
    handleCreateTodo: HandleCreateTodo;
    handleCompleteAllTodoItems: HandleCompleteTodoItems;
    handleIncompleteAllTodoItems: HandleIncompleteTodoItems;
    isAllTodosCompleted: boolean;
}

function TodoMenuView({ handleCreateTodo, isAllTodosCompleted, handleCompleteAllTodoItems, handleIncompleteAllTodoItems}: TodoMenuViewProps) {
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
                    (<IconButton
                        title="Uncheck all todos" 
                        className="complete-button" 
                        handleFunction={() => handleIncompleteAllTodoItems()}
                    >
                        <ListIcon className="list-icon" />
                    </IconButton>)
                    :
                    (<IconButton 
                        title="Check all todos" 
                        className="complete-button" 
                        handleFunction={() => handleCompleteAllTodoItems()}>
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

export default TodoMenuView;
