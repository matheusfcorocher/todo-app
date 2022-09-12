import React, { useState } from 'react';
import '../../../App.css';
import './todo-footer.css';

interface TodoFooter {

}

function TodoFooter({}: TodoFooter) {
    const handleClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        document.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
        event.currentTarget.classList.toggle('active')
    }

    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>1&nbsp;</strong>
                item left
            </span>
            <div className={`todo-filters`}>
                <button className={'todo-filter'} onClick={handleClick} >All</button>
                <button className={'todo-filter'} onClick={handleClick} >Active</button>
                <button className={'todo-filter'} onClick={handleClick} >Completed</button>
            </div>
        </div>
    );
}

export default TodoFooter;
