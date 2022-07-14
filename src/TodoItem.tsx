import React from "react";

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
} : TodoItemProps) => {
    return(
        <li className="todo-item">
            <label htmlFor="title" aria-label={title}>
                <input type="text" value={title} name="title"/>
            </label>
        </li>
    );
}
