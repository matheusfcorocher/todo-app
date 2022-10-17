import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ["small" , "medium" , "large"],
      control: { type: 'inline-radio' }
    },
    fontColor: {
      options: ["white" , "gray" , "dark"],
      control: { type: 'inline-radio' }
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
  <Button {...args} handleFunction={function (): void {
  }} />;

export const Default = Template.bind({});
Default.args = {};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  title: "Click Me",
};

