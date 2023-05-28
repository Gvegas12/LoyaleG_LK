import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UILabel, IUILabelProps } from "./UILabel";

export default {
  title: "shared/UILabel",
  component: UILabel,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UILabel>;

const StorybookComponent: ComponentStory<typeof UILabel> = (args) => (
  <UILabel {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUILabelProps;
