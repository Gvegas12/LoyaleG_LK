import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./UISelect";
import type { IUISelectProps, SelectOptionType } from "../types";

export default {
  title: "shared/UISelect",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const StorybookComponent: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

const options: SelectOptionType[] = [
  {
    id: 1,
    text: "test 1",
  },
  {
    id: 2,
    text: "test 2",
  },
  {
    id: 3,
    text: "test 3",
  },
];

export const Primary = StorybookComponent.bind({});
Primary.args = {
  options,
} as IUISelectProps;
