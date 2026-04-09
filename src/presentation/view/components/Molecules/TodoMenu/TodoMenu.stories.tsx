import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TodoMenu from './TodoMenu';

export default {
  title: 'Molecules/TodoMenu',
  component: TodoMenu,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof TodoMenu>;

const Template: StoryFn<typeof TodoMenu> = (args: any) => <TodoMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const IncompleteAllTodos = Template.bind({});
Default.args = {
};
