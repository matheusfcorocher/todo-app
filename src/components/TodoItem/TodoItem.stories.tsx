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
        isCompleted: false,
    }
};

export const Completed = Template.bind({});
Completed.args = {
    task: {
        id: "3",
        title: "TASK",
        isCompleted: true,
    }
};

export const TooLongTitle = Template.bind({});
TooLongTitle.args = {
    task: {
        id: "4",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan suscipit turpis vel volutpat. In vitae aliquam ex. Nullam in odio pellentesque, feugiat libero vel, fringilla massa. Duis nec odio in nisl fringilla vestibulum at feugiat lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        isCompleted: false,
    }
};