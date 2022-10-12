import React, { useState } from 'react';
import { HandleFilter } from '../../../../App';
import './todo-footer.css';

interface TodoFooter {
    todosQuantity: number;
    handleFilter: HandleFilter;
}

function TodoFooter({todosQuantity = 0, handleFilter}: TodoFooter) {
    const handleClick = (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>, filter?: boolean) : void => {
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
                <li><a className={'todo-filter active'} onClick={(e) => handleClick(e, undefined)} href="#/">All</a></li>
                <li><a className={'todo-filter'} onClick={(e) => handleClick(e, false)} href="#/active">Active</a></li>
                <li><a className={'todo-filter'} onClick={(e) => handleClick(e, true)} href="#/completed">Completed</a></li>
            </ul>
        </div>
    );
}

export default TodoFooter;
