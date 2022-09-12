import React, { useState } from 'react';
import '../../../App.css';
import './todo-footer.css';

interface TodoFooter {

}

function TodoFooter({}: TodoFooter) {
    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>1&nbsp;</strong>
                item left
            </span>
            <ul className={`todo-filters`}>
                <li className={'todo-filter'}>All</li>
                <li className={'todo-filter'}>Active</li>
                <li className={'todo-filter'}>Completed</li>
            </ul>
        </div>
    );
}

export default TodoFooter;
