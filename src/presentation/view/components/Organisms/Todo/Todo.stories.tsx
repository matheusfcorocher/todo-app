import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Todo from './Todo';

export default {
  title: 'Organisms/Todo',
  component: Todo,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof Todo>;

const Template: StoryFn<typeof Todo> = (args: any) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};

export const withItems = Template.bind({});
withItems.args = {
};