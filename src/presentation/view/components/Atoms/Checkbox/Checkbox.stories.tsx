import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args: any) => 
  <Checkbox {...args} handleOnChange={() => {}} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked : StoryFn<typeof Checkbox> = (args: any) => 
  <Checkbox {...args} handleOnChange={() => {}} />;

Checked.args = {
  checked: true
};
