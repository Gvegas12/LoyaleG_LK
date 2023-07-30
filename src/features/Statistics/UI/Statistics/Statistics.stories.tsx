import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Statistics, IStatisticsProps } from "./Statistics";

export default {
  title: "shared/Statistics",
  component: Statistics,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Statistics>;

const StorybookComponent: ComponentStory<typeof Statistics> = (args) => (
  <Statistics {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IStatisticsProps;
