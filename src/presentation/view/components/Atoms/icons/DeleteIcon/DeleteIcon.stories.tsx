import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DeleteIcon from './DeleteIcon';

export default {
  title: 'Atoms/DeleteIcon',
  component: DeleteIcon,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof DeleteIcon>;

const Template: StoryFn<typeof DeleteIcon> = (args: any) => <DeleteIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
  todosData: []
};