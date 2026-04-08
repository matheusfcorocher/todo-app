import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ArrowUpIcon from './ArrowUpIcon';

export default {
  title: 'Atoms/ArrowUpIcon',
  component: ArrowUpIcon,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof ArrowUpIcon>;

const Template: StoryFn<typeof ArrowUpIcon> = (args: any) => <ArrowUpIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};