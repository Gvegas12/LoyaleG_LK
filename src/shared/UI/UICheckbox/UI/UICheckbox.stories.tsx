import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UICheckbox } from "./UICheckbox";

export default {
  title: "shared/UI/UICheckbox",
  component: UICheckbox,
  argTypes: {},
} as ComponentMeta<typeof UICheckbox>;

const StorybookComponent: ComponentStory<typeof UICheckbox> = (args) => (
  <UICheckbox {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  active: true,
};
