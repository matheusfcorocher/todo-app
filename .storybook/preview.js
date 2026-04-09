import '../src/index.css';
import '../src/presentation/view/styles/colors/colors.css';
import '../src/presentation/view/styles/spacing/spacing.css';
import '../src/presentation/view/styles/typography/typography.css';
import '../src/presentation/view/styles/round-corners/round-corners.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const args = {
  isCompletedFilterController: {
    getIsCompletedFilter: () => true,
    getFilterByUrlHash: () => true,
    handleChangeFilter: () => {}
  },
  todoTaskController: {
    getTodoTasks: () => [
      { id: "1", title: "Ler documentação do Storybook", isCompleted: true },
      { id: "2", title: "Refatorar componentes", isCompleted: false },
      { id: "3", title: "Testar no navegador", isCompleted: false }
    ],
    getIsAllTodoTaskCompleted: () => false,
    getIsThereAnyTodoTaskCompleted: () => true,
    getIsTodoTasksNotEmpty: () => true,
    getOnlyActiveTodoTasks: () => [
      { id: "2", title: "Refatorar componentes", isCompleted: false },
      { id: "3", title: "Testar no navegador", isCompleted: false }
    ],
    handleAddTodoTask: () => {},
    handleDeleteTodoTask: () => {},
    handleUpdateTodoTaskTitle: () => {},
    handleUpdateTodoTaskState: () => {},
    handleCompleteAllTodoTasks: () => {},
    handleIncompleteAllTodoTasks: () => {},
    handleDeleteAllCompletedTodoTasks: () => {}
  }
};