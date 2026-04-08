import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CheckListIcon from './CheckListIcon';

export default {
  title: 'Atoms/CheckListIcon',
  component: CheckListIcon,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof CheckListIcon>;

const Template: StoryFn<typeof CheckListIcon> = (args: any) => <CheckListIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};