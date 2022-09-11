import React, { useState } from 'react';
import '../../../App.css';
import './todo-footer.css';

interface TodoFooter {

}

function TodoFooter({}: TodoFooter) {
    return (
        <div role="group" className={`todo-footer`}>
            <span className={`todo-count`}>
                <strong>1</strong>
                item left
            </span>
        </div>
    );
}

export default TodoFooter;
