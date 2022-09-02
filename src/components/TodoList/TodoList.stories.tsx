import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoList from './TodoList';

export default {
  title: 'Example/TodoList',
  component: TodoList,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
  todosData: []
};

export const withItems = Template.bind({});
withItems.args = {
  todosData: [
    {
      id: "1",
      title: "TASK",
      isCompleted: false,
    },
    {
      id: "2",
      title: "TASK 2",
      isCompleted: true,
    }
  ]
};