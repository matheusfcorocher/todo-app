import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => 
  <Checkbox handleOnChange={function (): void {
    throw new Error('Function not implemented.');
  } } checked={false}  />;

export const Default = Template.bind({});
Default.args = {};

export const Checked : ComponentStory<typeof Checkbox> = (args) => 
<Checkbox handleOnChange={function (): void {
    throw new Error('Function not implemented.');
  } } checked={true}/>;
