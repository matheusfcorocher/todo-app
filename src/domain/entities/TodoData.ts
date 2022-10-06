import { v4 as uuidv4 } from 'uuid';
import { isStringBlank } from '../../lib/string';

//Entity

export type TodoData = {
    id: string;
    title: string;
    isCompleted: boolean;
}

export type Todos = Array<TodoData>;

//Functions

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
    if (isStringBlank(newTitle)) {
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

type UpdateTodoStateParameters = {
    todos: Todos,
    id: string,
    state: boolean
};

export function updateTodoState({todos, id, state} : UpdateTodoStateParameters): Todos {
    const oldTodo = todos.find((todo) => todo.id === id);
    if (oldTodo) {
      const index = todos.findIndex((todo) => todo.id === id);
      const newTodo: TodoData = { ...oldTodo, isCompleted: state };
      const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
      return newTodos;
    }
    return todos;
}

type CompleteAllTodosParameters = {
    todos: Todos
};

export function completeAllTodosItem({todos} : CompleteAllTodosParameters): Todos {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isCompleted: true
      }
    });
    return newTodos;
}

type IncompleteAllTodosParameters = {
    todos: Todos
};

export function incompleteAllTodosItem({todos} : IncompleteAllTodosParameters): Todos {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isCompleted: false
      }
    });
    return newTodos;
  }

