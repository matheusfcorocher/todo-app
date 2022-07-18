import React, { useState } from "react";
import deleteIcon from '../../assets/icons/delete.svg';

import './todoitem.css';

type TodoItemStates = "COMPLETED" | "ACTIVE" | "EDITING";

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
    return (
        <li className={`todo-item ${state}`}>
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
                        onChange={() => handleUpdateTodoItemTitle}
                        onFocus={() => handleUpdateTodoItemTitle}
                        onBlur={() => handleUpdateTodoItemTitle}
                    />
                </label>
                {state !== "EDITING" && (
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
