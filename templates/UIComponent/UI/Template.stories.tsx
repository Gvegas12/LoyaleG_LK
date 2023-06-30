import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Template } from "./Template";

export default {
  title: "shared/Template",
  component: Template,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Template>;

const StorybookComponent: ComponentStory<typeof Template> = (args) => (
  <Template {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
