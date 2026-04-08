import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TodoList from './TodoList';

export default {
  title: 'Molecules/TodoList',
  component: TodoList,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof TodoList>;

const Template: StoryFn<typeof TodoList> = (args: any) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};

export const withItems = Template.bind({});
withItems.args = {
  todoTaskController: {
    getTodoTasks() {
      return [
        {
          id: "1",
          title: "Task 1",
          isCompleted: true
        },
        {
          id: "2",
          title: "Task 2",
          isCompleted: true
        },
        {
          id: "3",
          title: "Task 2",
          isCompleted: false
        }
      ]
    },
  } as any
};