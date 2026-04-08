import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ListIcon from './ListIcon';

export default {
  title: 'Atoms/ListIcon',
  component: ListIcon,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof ListIcon>;

const Template: StoryFn<typeof ListIcon> = (args: any) => <ListIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};