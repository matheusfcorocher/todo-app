import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from './DeleteIcon';

export default {
  title: 'Atoms/DeleteIcon',
  component: DeleteIcon,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof DeleteIcon>;

const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon />;

export const Default = Template.bind({});
Default.args = {};

Default.args = {
  todosData: []
};