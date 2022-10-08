import React, { useState } from 'react';
import './todo-footer.css';

interface TodoFooter {
    todosQuantity: number;
}

function TodoFooter({todosQuantity = 0}: TodoFooter) {
    const handleClick = (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) : void => {
        document.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
        event.currentTarget.classList.toggle('active')
    }

    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>{todosQuantity}&nbsp;</strong>
                item left
            </span>
            <ul className={`todo-filters`}>
                <li><a className={'todo-filter active'} onClick={handleClick} href="#/">All</a></li>
                <li><a className={'todo-filter'} onClick={handleClick} href="#/active">Active</a></li>
                <li><a className={'todo-filter'} onClick={handleClick} href="#/completed">Completed</a></li>
            </ul>
        </div>
    );
}

export default TodoFooter;
