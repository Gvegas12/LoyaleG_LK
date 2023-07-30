import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddAdminForm } from "./AddAdminForm";

export default {
  title: "shared/AddAdminForm",
  component: AddAdminForm,
  argTypes: {},
} as ComponentMeta<typeof AddAdminForm>;

const StorybookComponent: ComponentStory<typeof AddAdminForm> = (args) => (
  <AddAdminForm {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
