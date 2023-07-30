import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectSubscription } from "./SelectSubscription";

export default {
  title: "shared/SelectSubscription",
  component: SelectSubscription,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SelectSubscription>;

const StorybookComponent: ComponentStory<typeof SelectSubscription> = (args) => (
  <SelectSubscription {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
