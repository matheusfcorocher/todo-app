import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Todo from './Todo';

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
};

export const withItems = Template.bind({});
withItems.args = {
};