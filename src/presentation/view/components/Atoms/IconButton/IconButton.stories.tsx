import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import IconButton from './IconButton';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args: any) => 
  <IconButton {...args} handleFunction={() => {}} />;

export const Default = Template.bind({});
Default.args = {};

export const DeleteButton : StoryFn<typeof IconButton> = (args: any) => 
<IconButton handleFunction={() => {}}>
  <DeleteIcon {...DeleteIcon.args}/>
</IconButton>;
