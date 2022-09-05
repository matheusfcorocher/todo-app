import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './IconButton';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => 
  <IconButton handleFunction={function (): void {
    throw new Error('Function not implemented.');
  } } children={undefined} />;

export const Default = Template.bind({});
Default.args = {};

export const DeleteButton : ComponentStory<typeof IconButton> = (args) => 
<IconButton handleFunction={function (): void {
throw new Error('Function not implemented.');
} }>
  <DeleteIcon {...DeleteIcon.args}/>
</IconButton>;
