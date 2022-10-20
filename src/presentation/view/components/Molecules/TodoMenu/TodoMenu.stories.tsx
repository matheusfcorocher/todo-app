import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoMenu from './TodoMenu';

export default {
  title: 'Molecules/TodoMenu',
  component: TodoMenu,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoMenu>;

const Template: ComponentStory<typeof TodoMenu> = (args) => <TodoMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const IncompleteAllTodos = Template.bind({});
Default.args = {
};
