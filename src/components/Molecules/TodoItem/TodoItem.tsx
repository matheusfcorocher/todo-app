import React, { useRef, useState, useEffect } from "react";
import { handleDeleteTodo } from "../../../App";
import deleteIcon from '../../../assets/icons/delete.svg';
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import IconButton from "../../Atoms/IconButton/IconButton";
import DeleteIcon from "../../Atoms/icons/DeleteIcon/DeleteIcon";
import TitleInput from "../../Atoms/TitleInput/TitleInput";

import './todoitem.css';

interface TodoItemProps {
    task: {
        id: string,
        title: string,
        isCompleted: boolean
    },
    handleUpdateTodoItemTitle: (newTitle: string) => void,
    handleUpdateTodoItemState: (newState: boolean) => void,
    handleDeleteTodoItem: handleDeleteTodo,
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
    const ref = useRef<HTMLInputElement>(document.createElement('input'));
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
            <form onSubmit={event => event.preventDefault()}>
                <Checkbox
                    handleOnChange={() => {
                        if (isCompleted) {
                            handleUpdateTodoItemState(false);
                        } else {
                            handleUpdateTodoItemState(true);
                        }
                    }}
                    checked={isCompleted}
                />
                <TitleInput
                    title={title}
                    handleOnChange={() => handleUpdateTodoItemTitle}
                    handleOnFocus={() => setFocus(true)}
                    handleOnBlur={() => setFocus(false)}
                    ref={ref}
                />
                {!hasFocus && (
                    <IconButton
                        className="delete-button"
                        handleFunction={() => handleDeleteTodoItem(id)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </form>
        </li>
    );
}
