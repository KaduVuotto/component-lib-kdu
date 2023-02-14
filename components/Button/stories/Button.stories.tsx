import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "PRIMARY",
  size: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "SECONDARY",
  size: "sm",
  colorScheme: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: "DISABLED",
  size: "sm",
};
