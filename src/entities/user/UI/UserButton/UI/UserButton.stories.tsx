import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserButton, IUserButtonProps } from "./UserButton";

export default {
  title: "shared/UserButton",
  component: UserButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UserButton>;

const StorybookComponent: ComponentStory<typeof UserButton> = (args) => (
  <UserButton {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUserButtonProps;
