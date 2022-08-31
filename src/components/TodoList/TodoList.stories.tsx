import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoList from './TodoList';

export default {
  title: 'Example/TodoList',
  component: TodoList,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0}}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList/>;

export const Default = Template.bind({});
Default.args = {};