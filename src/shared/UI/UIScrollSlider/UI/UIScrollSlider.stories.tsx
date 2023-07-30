import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIScrollSlider } from "./UIScrollSlider";

export default {
  title: "shared/UIScrollSlider",
  component: UIScrollSlider,
  argTypes: {},
} as ComponentMeta<typeof UIScrollSlider>;

const StorybookComponent: ComponentStory<typeof UIScrollSlider> = (args) => (
  <UIScrollSlider {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
