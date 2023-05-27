import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UITriangle, IUITriangleProps } from "./UITriangle";

export default {
  title: "shared/UITriangle",
  component: UITriangle,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UITriangle>;

const StorybookComponent: ComponentStory<typeof UITriangle> = (args) => (
  <UITriangle {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUITriangleProps;
