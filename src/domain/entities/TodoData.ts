import { v4 as uuidv4 } from 'uuid';

export type TodoData = {
    id: string;
    title: string;
    isCompleted: boolean;
}

export type Todos = Array<TodoData>;

type AddTodoParameters = {
    todos: Todos,
    title: string
};

export function addTodo({todos, title} : AddTodoParameters): Todos {
    const newTodo: TodoData = {
      id: uuidv4(),
      title,
      isCompleted: false
    };
    return [...todos, newTodo];
}