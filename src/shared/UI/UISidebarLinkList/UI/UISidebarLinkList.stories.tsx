import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UISidebarLinkList } from "./UISidebarLinkList";

export default {
  title: "shared/UISidebarLinkList",
  component: UISidebarLinkList,
  argTypes: {},
} as ComponentMeta<typeof UISidebarLinkList>;

const StorybookComponent: ComponentStory<typeof UISidebarLinkList> = (args) => (
  <UISidebarLinkList {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
