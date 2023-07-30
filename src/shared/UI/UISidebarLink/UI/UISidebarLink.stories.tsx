import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UISidebarLink } from "./UISidebarLink";

export default {
  title: "shared/UISidebarLink",
  component: UISidebarLink,
  argTypes: {},
} as ComponentMeta<typeof UISidebarLink>;

const StorybookComponent: ComponentStory<typeof UISidebarLink> = (args) => (
  <UISidebarLink {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
