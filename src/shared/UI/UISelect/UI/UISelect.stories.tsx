import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UISelect, IUISelectProps } from "./UISelect";

export default {
  title: "shared/UISelect",
  component: UISelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UISelect>;

const StorybookComponent: ComponentStory<typeof UISelect> = (args) => (
  <UISelect {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUISelectProps;
