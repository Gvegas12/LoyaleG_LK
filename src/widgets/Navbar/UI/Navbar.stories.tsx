import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar, INavbarProps } from "./Navbar";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const StorybookComponent: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as INavbarProps;
