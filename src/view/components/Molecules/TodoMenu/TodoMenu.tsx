import React, { useState } from 'react';
import { HandleCompleteTodoItems, HandleCreateTodo, HandleIncompleteTodoItems } from '../../../../App';
import { TodoTaskControllerReturnType } from '../../../controllers/TodoTaskController';
import IconButton from '../../Atoms/IconButton/IconButton';
import CheckListIcon from '../../Atoms/icons/CheckListIcon/CheckListIcon';
import ListIcon from '../../Atoms/icons/ListIcon/ListIcon';
import './todo-menu.css';

interface TodoMenuProps {
    todoTaskController: TodoTaskControllerReturnType;
    isAllTodosCompleted: boolean;
}

function TodoMenu({ isAllTodosCompleted, todoTaskController}: TodoMenuProps) {
    const [title, setTitle] = useState<string>("");
    const {handleAddTodoTask, handleIncompleteAllTodoTasks, handleCompleteAllTodoTasks} = todoTaskController;

    function handlePress(event : React.KeyboardEvent<HTMLInputElement>) {
        if(event.key == "Enter") {
            handleAddTodoTask(title);
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
                        handleFunction={() => handleIncompleteAllTodoTasks()}
                    >
                        <ListIcon className="list-icon" />
                    </IconButton>)
                    :
                    (<IconButton 
                        title="Check all todos" 
                        className="complete-button" 
                        handleFunction={() => handleCompleteAllTodoTasks()}>
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
