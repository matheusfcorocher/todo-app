import React, { useRef, useState, useEffect } from "react";
import { TodoTask } from "../../../../../domain/entities/TodoTask";
import { isStringBlank } from "../../../../../lib/string/string";
import { TodoTaskControllerReturnType } from "../../../../controllers/TodoTaskController";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import IconButton from "../../Atoms/IconButton/IconButton";
import DeleteIcon from "../../Atoms/icons/DeleteIcon/DeleteIcon";
import TitleInput from "../../Atoms/TitleInput/TitleInput";

import './todoitem.css';

interface TodoItemProps {
    task: TodoTask,
    todoTaskController: TodoTaskControllerReturnType;
}

export const TodoItem = ({
    task: {
        id,
        title,
        isCompleted
    },
    todoTaskController
}: TodoItemProps) => {
    const { handleUpdateTodoTaskState, handleUpdateTodoTaskTitle, handleDeleteTodoTask } = todoTaskController
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
                            handleUpdateTodoTaskState(id, false);
                        } else {
                            handleUpdateTodoTaskState(id, true);
                        }
                    }}
                    checked={isCompleted}
                />
                <TitleInput
                    id={id}
                    title={title}
                    handleOnChange={handleUpdateTodoTaskTitle}
                    handleOnFocus={() => setFocus(true)}
                    handleOnBlur={() => {
                        if (isStringBlank(title)) {
                            handleDeleteTodoTask(id)
                        }
                        setFocus(false)
                    }}
                    ref={ref}
                />
                {!hasFocus && (
                    <IconButton
                        className="delete-button"
                        handleFunction={() => handleDeleteTodoTask(id)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </form>
        </li>
    );
}
