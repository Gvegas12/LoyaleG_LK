import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIButton } from "./UIButton";

export default {
  title: "shared/UIButton",
  component: UIButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIButton>;

const StorybookComponent: ComponentStory<typeof UIButton> = (args) => (
  <UIButton {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
};
