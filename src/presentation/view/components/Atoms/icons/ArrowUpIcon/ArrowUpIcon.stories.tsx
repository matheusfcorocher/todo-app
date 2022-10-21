import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowUpIcon from './ArrowUpIcon';

export default {
  title: 'Atoms/ArrowUpIcon',
  component: ArrowUpIcon,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof ArrowUpIcon>;

const Template: ComponentStory<typeof ArrowUpIcon> = (args) => <ArrowUpIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};