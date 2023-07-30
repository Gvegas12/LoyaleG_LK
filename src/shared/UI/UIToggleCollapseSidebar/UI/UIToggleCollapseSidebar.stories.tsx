import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIToggleCollapseSidebar } from "./UIToggleCollapseSidebar";

export default {
  title: "shared/UIToggleCollapseSidebar",
  component: UIToggleCollapseSidebar,
  argTypes: {},
} as ComponentMeta<typeof UIToggleCollapseSidebar>;

const StorybookComponent: ComponentStory<typeof UIToggleCollapseSidebar> = (args) => (
  <UIToggleCollapseSidebar {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
