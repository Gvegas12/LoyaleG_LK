import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIBadge } from "./UIBadge";

export default {
  title: "shared/UIBadge",
  component: UIBadge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIBadge>;

const StorybookComponent: ComponentStory<typeof UIBadge> = (args) => (
  <UIBadge {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
