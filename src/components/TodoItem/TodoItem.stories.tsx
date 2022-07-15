import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoItem } from './TodoItem';

export default {
  title: 'Example/TodoItem',
  component: TodoItem,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0}}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: "1",
        title: "TASK",
        state: "ACTIVE",
    }
};

export const Editing = Template.bind({});
Editing.args = {
    task: {
        id: "2",
        title: "TASK",
        state: "EDITING",
    }
};

export const Completed = Template.bind({});
Completed.args = {
    task: {
        id: "3",
        title: "TASK",
        state: "COMPLETED",
    }
};