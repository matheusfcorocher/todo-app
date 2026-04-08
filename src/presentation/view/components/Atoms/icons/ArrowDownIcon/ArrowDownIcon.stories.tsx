import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ArrowDownIcon from './ArrowDownIcon';

export default {
  title: 'Atoms/ArrowDownIcon',
  component: ArrowDownIcon,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof ArrowDownIcon>;

const Template: StoryFn<typeof ArrowDownIcon> = (args: any) => <ArrowDownIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};