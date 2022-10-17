import React, { useState } from 'react';
import { HandleFilter } from '../../../../../App';
import { TodoTaskControllerReturnType } from '../../../../controllers/TodoTaskController';
import Button from '../../Atoms/Button/Button';
import './todo-footer.css';

interface TodoFooter {
    isThereAnyTodoTaskCompleted: boolean;
    activeTodoTasksQuantity: number;
    handleFilter: HandleFilter;
    todoTaskController: TodoTaskControllerReturnType;
}

function TodoFooter({ activeTodoTasksQuantity = 0, isThereAnyTodoTaskCompleted = false, handleFilter, todoTaskController }: TodoFooter) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, filter?: boolean): void => {
        document.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
        event.currentTarget.classList.toggle('active')
        handleFilter(filter);
    }
    const {handleDeleteAllCompletedTodoTasks} = todoTaskController;

    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>{activeTodoTasksQuantity}&nbsp;</strong>
                item left
            </span>
            <ul className={`todo-filters`}>
                <li><a title={"Filter all todo tasks"} className={'todo-filter active'} onClick={(e) => handleClick(e, undefined)} href="#/">All</a></li>
                <li><a title={"Filter active todo tasks"} className={'todo-filter'} onClick={(e) => handleClick(e, false)} href="#/active">Active</a></li>
                <li><a title={"Filter completed todo tasks"} className={'todo-filter'} onClick={(e) => handleClick(e, true)} href="#/completed">Completed</a></li>
            </ul>
            {
                isThereAnyTodoTaskCompleted === true &&
                <Button
                    handleFunction={handleDeleteAllCompletedTodoTasks}
                    title={"Clear Completed todo tasks"}
                    variant={"primary"}
                    size={"medium"}
                    fontColor={"gray"}
                />
            }
        </div>
    );
}

export default TodoFooter;
