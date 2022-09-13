import React, { useState } from 'react';
import { TodoItem } from '../../Molecules/TodoItem/TodoItem';
import '../../../App.css';
import './todolist.css';
import list from '../../../assets/icons/list-icon.svg';
import checkList from '../../../assets/icons/check-list-icon.svg';
import TodoMenu from '../../Molecules/TodoMenu/TodoMenu';
import TodoList from '../../Molecules/TodoList/TodoList';
import TodoFooter from '../../Molecules/TodoFooter/TodoFooter';

type TodoData = {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProps {
  todosData?: Array<TodoData>;
}

function Todo({ todosData = [] }: TodoProps) {
  return (
    <div className={"todo-panel"}>
      <TodoMenu handleCreateTodo={function (): void {
        throw new Error('Function not implemented.');
      } } isAllTodosCompleted={false}      
      />
      <TodoList todosData={todosData} />
      <TodoFooter />
    </div>
  );
}

export default Todo;
