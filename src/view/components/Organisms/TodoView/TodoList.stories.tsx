import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Todo from './TodoView';

export default {
  title: 'Organisms/Todo',
  component: Todo,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

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