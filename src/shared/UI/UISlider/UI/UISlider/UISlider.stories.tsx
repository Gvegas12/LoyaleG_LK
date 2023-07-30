import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UISlider } from "./UISlider";

export default {
  title: "shared/UISlider",
  component: UISlider,
  argTypes: {},
} as ComponentMeta<typeof UISlider>;

const StorybookComponent: ComponentStory<typeof UISlider> = (args) => (
  <UISlider {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
