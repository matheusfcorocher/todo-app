import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TitleInput from './TitleInput';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/TitleInput',
  component: TitleInput,
  decorators: [
    (Story: any) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as Meta<typeof TitleInput>;

const Template: StoryFn<typeof TitleInput> = (args: any) => 
  <TitleInput
    {...args}
    handleOnChange={() => {}}
    handleOnFocus={() => {}}
    handleOnBlur={() => {}}
/>;

export const Default = Template.bind({});
Default.args = {
  title: "Digite o título da tarefa..."
};