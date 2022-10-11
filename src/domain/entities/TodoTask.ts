import { v4 as uuidv4 } from 'uuid';
import { isStringBlank } from '../../lib/string';

//Entity

export type TodoTask = {
    id: string;
    title: string;
    isCompleted: boolean;
}

export type TodoTasks = Array<TodoTask>;

//Functions

export type AddTodoTaskParameters = {
    todoTasks: TodoTasks,
    title: string
};

export function addTodoTask({todoTasks, title} : AddTodoTaskParameters): TodoTasks {
    const newTodo: TodoTask = {
      id: uuidv4(),
      title,
      isCompleted: false
    };
    return [...todoTasks, newTodo];
}

export type DeleteTodoTaskParameters = {
    todoTasks: TodoTasks,
    id: string
};

export function deleteTodoTask({todoTasks, id} :DeleteTodoTaskParameters): TodoTasks {
    const newTodoTasks = todoTasks.filter((todo) => todo.id !== id);
    return newTodoTasks;
}

export type UpdateTodoTaskTitleParameters = {
    todoTasks: TodoTasks,
    id: string,
    newTitle: string
};

export function updateTodoTaskTitle({todoTasks, id, newTitle}: UpdateTodoTaskTitleParameters): TodoTasks {
    if (isStringBlank(newTitle)) {
      const newTodoTasks = deleteTodoTask({todoTasks, id});
      return newTodoTasks;
    }

    const oldTodo = todoTasks.find((todo) => todo.id === id);
    if (oldTodo) {
        const index = todoTasks.findIndex((todo) => todo.id === id);
        const newTodo: TodoTask = { ...oldTodo, title: newTitle };
        const newTodoTasks = [...todoTasks.slice(0, index), newTodo, ...todoTasks.slice(index + 1)];
        return(newTodoTasks);
    }

    return todoTasks;
}

export type UpdateTodoTaskStateParameters = {
    todoTasks: TodoTasks,
    id: string,
    state: boolean
};

export function updateTodoTaskState({todoTasks, id, state} : UpdateTodoTaskStateParameters): TodoTasks {
    const oldTodo = todoTasks.find((todo) => todo.id === id);
    if (oldTodo) {
      const index = todoTasks.findIndex((todo) => todo.id === id);
      const newTodo: TodoTask = { ...oldTodo, isCompleted: state };
      const newTodoTasks = [...todoTasks.slice(0, index), newTodo, ...todoTasks.slice(index + 1)];
      return newTodoTasks;
    }
    return todoTasks;
}

export type CompleteAllTodoTasksParameters = {
    todoTasks: TodoTasks
};

export function completeAllTodoTasks({todoTasks} : CompleteAllTodoTasksParameters): TodoTasks {
    const newTodoTasks = todoTasks.map(todo => {
      return {
        ...todo,
        isCompleted: true
      }
    });
    return newTodoTasks;
}

type IncompleteAllTodoTasksParameters = {
    todoTasks: TodoTasks
};

export function incompleteAllTodoTasks({todoTasks} : IncompleteAllTodoTasksParameters): TodoTasks {
    const newTodoTasks = todoTasks.map(todo => {
      return {
        ...todo,
        isCompleted: false
      }
    });
    return newTodoTasks;
  }

