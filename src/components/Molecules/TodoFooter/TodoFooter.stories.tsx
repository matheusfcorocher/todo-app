import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoFooter from './TodoFooter';

export default {
  title: 'Molecules/TodoFooter',
  component: TodoFooter,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TodoFooter>;

const Template: ComponentStory<typeof TodoFooter> = (args) => <TodoFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
};