import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoMenuView from './TodoMenuView';

export default {
  title: 'Molecules/TodoMenuView',
  component: TodoMenuView,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoMenuView>;

const Template: ComponentStory<typeof TodoMenuView> = (args) => <TodoMenuView {...args} />;

export const Default = Template.bind({});
Default.args = {
  isAllTodosCompleted: false
};

export const IncompleteAllTodos = Template.bind({});
Default.args = {
  isAllTodosCompleted: true
};
