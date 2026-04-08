import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story: any) => (
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
      options: ["small", "medium", "large"],
      control: { type: 'inline-radio' }
    },
    fontColor: {
      options: ["white", "gray", "dark"],
      control: { type: 'inline-radio' }
    },
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: any) =>
  <Button {...args} handleFunction={function (): void {
  }} />;

export const Default = Template.bind({});
Default.args = {
  title: "Botão"
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  title: "Click Me",
  variant: "primary"
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  title: "Click Me",
  variant: "secondary"
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  title: "Click Me",
  variant: "tertiary"
};
