import React, { useState } from 'react';
import { HandleDeleteAllCompletedTodoTasks, HandleFilter } from '../../../../App';
import Button from '../../Atoms/Button/Button';
import './todo-footer.css';

interface TodoFooter {
    areThereTodoTasksCompleted: boolean;
    todosQuantity: number;
    handleFilter: HandleFilter;
    handleDeleteAllCompletedTodoTasks: HandleDeleteAllCompletedTodoTasks;
}

function TodoFooter({ todosQuantity = 0, areThereTodoTasksCompleted = false, handleFilter, handleDeleteAllCompletedTodoTasks }: TodoFooter) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, filter?: boolean): void => {
        document.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
        event.currentTarget.classList.toggle('active')
        handleFilter(filter);
    }

    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>{todosQuantity}&nbsp;</strong>
                item left
            </span>
            <ul className={`todo-filters`}>
                <li><a title={"Filter all todo tasks"} className={'todo-filter active'} onClick={(e) => handleClick(e, undefined)} href="#/">All</a></li>
                <li><a title={"Filter active todo tasks"} className={'todo-filter'} onClick={(e) => handleClick(e, false)} href="#/active">Active</a></li>
                <li><a title={"Filter completed todo tasks"} className={'todo-filter'} onClick={(e) => handleClick(e, true)} href="#/completed">Completed</a></li>
            </ul>
            {
                areThereTodoTasksCompleted === true &&
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
