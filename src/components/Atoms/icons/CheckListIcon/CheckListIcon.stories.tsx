import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckListIcon from './CheckListIcon';

export default {
  title: 'Atoms/CheckListIcon',
  component: CheckListIcon,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof CheckListIcon>;

const Template: ComponentStory<typeof CheckListIcon> = (args) => <CheckListIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
  todosData: []
};