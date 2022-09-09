import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListIcon from './ListIcon';

export default {
  title: 'Atoms/ListIcon',
  component: ListIcon,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof ListIcon>;

const Template: ComponentStory<typeof ListIcon> = (args) => <ListIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
};