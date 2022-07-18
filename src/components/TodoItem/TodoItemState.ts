import React, { useState } from "react";

const [todoItemTitle, setTodoItemTitle] = useState(title);
const [todoItemPastState, setTodoItemPastState] = useState(state);
const [todoItemState, setTodoItemState] = useState(state);

const updateTaskState = (newState: string) => {
    setTodoItemState(newState);
};

const updateTaskTitle = () => {
    return {
        onChange: updateTaskTitleOnChange,
        onBlur: updateTaskTitleOnBlur,
        onFocus: updateTaskTitleOnFocus,
    }
}

const updateTaskTitleOnChange = (newTitle: string) => {
    setTodoItemTitle(newTitle);
};

const updateTaskTitleOnBlur = () => {
    setTodoItemState(todoItemPastState == "EDITING" ? "ACTIVE" 
    : todoItemPastState);
}

const updateTaskTitleOnFocus = () => {
    setTodoItemPastState(todoItemState);
    setTodoItemState("EDITING");
}