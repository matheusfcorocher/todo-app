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
    onCompletingTodo: () => void;
    onEditingTodo: () => void;
}

export const TodoItem = ({
    task: {
        id,
        title,
        state
    },
    onCompletingTodo,
    onEditingTodo
}: TodoItemProps) => {
    const [todoItemTitle, setTodoItemTitle] = useState(title);
    const [todoItemPastState, setTodoItemPastState] = useState(state);
    const [todoItemState, setTodoItemState] = useState(state);
    return (
        <li className={`todo-item ${todoItemState}`}>
            <form onSubmit={(e) => {
                setTodoItemState(todoItemPastState);
                e.preventDefault();
            }}>
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
                        checked={todoItemState === "COMPLETED"}
                        onClick={() => todoItemState === "COMPLETED" ? setTodoItemState("ACTIVE") : setTodoItemState("COMPLETED")}
                    />
                </label>
                <label
                    htmlFor="title"
                    aria-label={todoItemTitle}
                    className="title"
                >
                    <input
                        type="text"
                        value={todoItemTitle}
                        name="title"
                        className={`title-input`}
                        onChange={(e) => setTodoItemTitle(e.target.value)}
                        onFocus={() => {
                            setTodoItemPastState(todoItemState)
                            setTodoItemState("EDITING")
                        }
                        }
                        onBlur={() => {
                            setTodoItemState(todoItemPastState == "EDITING" ? "ACTIVE" : todoItemPastState)
                        }}
                    />
                </label>
                {todoItemState !== "EDITING" && (
                    <button
                        className="delete-button"
                        onClick={() => 1}
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
