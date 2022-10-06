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

type DeleteTodoParameters = {
    todos: Todos,
    id: string
};

export function deleteTodo({todos, id} :DeleteTodoParameters): Todos {
    const newTodos = todos.filter((todo) => todo.id !== id);
    return newTodos;
}

type UpdateTodoParameters = {
    todos: Todos,
    id: string,
    newTitle: string
};

export function updateTodoTitle({todos, id, newTitle}: UpdateTodoParameters): Todos {
    if (isTodoTitleBlank(newTitle)) {
      const newTodos = deleteTodo({todos, id});
      return newTodos;
    }

    const oldTodo = todos.find((todo) => todo.id === id);
    if (oldTodo) {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodo: TodoData = { ...oldTodo, title: newTitle };
        const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
        return(newTodos);
    }

    return todos;
    
}

function isTodoTitleBlank(title: string): boolean {
    if (title.trim().length === 0) {
      return true
    }

    return false;
}