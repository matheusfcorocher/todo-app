import React, { useRef, useState, useEffect } from "react";
import deleteIcon from '../../../assets/icons/delete.svg';
import IconButton from "../../Atoms/IconButton/IconButton";
import DeleteIcon from "../../Atoms/icons/DeleteIcon/DeleteIcon";

import './todoitem.css';

interface TodoItemProps {
    task: {
        id: string,
        title: string,
        isCompleted: boolean
    },
    handleUpdateTodoItemTitle: (newTitle: string) => void,
    handleUpdateTodoItemState: (newState: boolean) => void,
    handleDeleteTodoItem: (newState: string) => void,
}

export const TodoItem = ({
    task: {
        id,
        title,
        isCompleted
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
        <li 
            data-testid={`todoItem-${id}`}
            className={`todo-item ${isCompleted}`}
        >
            <form>
                <label
                    htmlFor="checked"
                    aria-label={`todoItem-${id}`}
                    className={`checkbox`}
                >
                    <input
                        type="checkbox"
                        role="checkbox"
                        name="checked"
                        id={`todoItem-${id}`}
                        className="checkbox-input"
                        checked={isCompleted}
                        onChange={() => {
                            if(isCompleted) {
                                handleUpdateTodoItemState(false);
                            } else {
                                handleUpdateTodoItemState(true);
                            }
                        }}
                    />
                </label>
                <label
                    htmlFor="title"
                    aria-label={title}
                    className="title"
                >
                    <input
                        type="text"
                        role="textbox"
                        value={title}
                        className={`title-input`}
                        ref={ref}
                        onChange={() => handleUpdateTodoItemTitle}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </label>
                {!hasFocus && (
                    <IconButton
                        className="delete-button" 
                        handleFunction={() => handleDeleteTodoItem}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </form>
        </li>
    );
}
