import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIBox, IUIBoxProps } from "./UIBox";

export default {
  title: "shared/UIBox",
  component: UIBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIBox>;

const StorybookComponent: ComponentStory<typeof UIBox> = (args) => (
  <UIBox {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUIBoxProps;
