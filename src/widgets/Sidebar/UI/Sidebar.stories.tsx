import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar, ISidebarProps } from "./Sidebar";

export default {
  title: "shared/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const StorybookComponent: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as ISidebarProps;
