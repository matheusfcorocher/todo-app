import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TodoFooter from './TodoFooter';

export default {
  title: 'Molecules/TodoFooter',
  component: TodoFooter,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof TodoFooter>;

const Template: StoryFn<typeof TodoFooter> = (args: any) => <TodoFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
};