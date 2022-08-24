import React, { useRef, useState, useEffect } from "react";
import deleteIcon from '../../assets/icons/delete.svg';

import './todoitem.css';

export type TodoItemStates = "COMPLETED" | "ACTIVE";

interface TodoItemProps {
    task: {
        id: string,
        title: string,
        state: TodoItemStates
    },
    handleUpdateTodoItemTitle: (newTitle: string) => void,
    handleUpdateTodoItemState: (newState: string) => void,
    handleDeleteTodoItem: (newState: string) => void,
}

export const TodoItem = ({
    task: {
        id,
        title,
        state
    },
    handleUpdateTodoItemTitle,
    handleUpdateTodoItemState,
    handleDeleteTodoItem,
}: TodoItemProps) => {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [hasFocus, setFocus] = useState(false);

    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setFocus(true);
        }
    }, []);

    return (
        <li className={`todo-item ${state}`}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >
            <form>
                <label
                    htmlFor="checked"
                    aria-label={`todoItem-${id}`}
                    className={`checkbox`}
                >
                    <input
                        type="checkbox"
                        name="checked"
                        id={`todoItem-${id}`}
                        className="checkbox-input"
                        checked={state === "COMPLETED"}
                        onChange={() => handleUpdateTodoItemState}
                    />
                </label>
                <label
                    htmlFor="title"
                    aria-label={title}
                    className="title"
                >
                    <input
                        type="text"
                        value={title}
                        name="title"
                        className={`title-input`}
                        ref={ref}
                        onChange={() => handleUpdateTodoItemTitle}
                        onFocus={() => setFocus(false)}
                    />
                </label>
                {hasFocus && (
                    <button
                        className="delete-button"
                        onClick={() => handleDeleteTodoItem}
                        id={`deleteTodoItem-${id}`}
                        aria-label={`deleteTodoItem-${id}`}
                        key={`deleteTodoItem-${id}`}
                    >
                        <img src={deleteIcon} className="delete-icon" alt="delete" />
                    </button>
                )}
            </form>
        </li>
    );
}
