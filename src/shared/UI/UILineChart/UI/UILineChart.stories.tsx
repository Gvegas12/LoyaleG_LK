import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UILineChart } from "./UILineChart";

export default {
  title: "shared/UILineChart",
  component: UILineChart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UILineChart>;

const StorybookComponent: ComponentStory<typeof UILineChart> = (args) => (
  <UILineChart {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
