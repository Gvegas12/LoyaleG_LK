import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIInput } from "./UIInput";

export default {
  title: "shared/UIInput",
  component: UIInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIInput>;

const StorybookComponent: ComponentStory<typeof UIInput> = (args) => (
  <UIInput {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
