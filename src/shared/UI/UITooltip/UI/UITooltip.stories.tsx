import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UITooltip, IUITooltipProps } from "./UITooltip";

export default {
  title: "shared/UITooltip",
  component: UITooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UITooltip>;

const StorybookComponent: ComponentStory<typeof UITooltip> = (args) => (
  <UITooltip {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUITooltipProps;
