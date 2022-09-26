import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleInput from './TitleInput';
import { Default as DeleteIcon } from '../icons/DeleteIcon/DeleteIcon.stories';

export default {
  title: 'Atoms/TitleInput',
  component: TitleInput,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ]
} as ComponentMeta<typeof TitleInput>;

const Template: ComponentStory<typeof TitleInput> = (args) => 
  <TitleInput
    handleOnChange={function (): void {
      throw new Error('Function not implemented.');
    }}
    handleOnFocus={function (): void {
      throw new Error('Function not implemented.');
    }}
    handleOnBlur={function (): void {
      throw new Error('Function not implemented.');
    }}
    title={''}
    className={undefined}
    />;

export const Default = Template.bind({});
Default.args = {};