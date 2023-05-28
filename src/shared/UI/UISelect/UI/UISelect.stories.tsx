import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UISelect, IUISelectProps, UISelectOptionType } from "./UISelect";

export default {
  title: "shared/UISelect",
  component: UISelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UISelect>;

const StorybookComponent: ComponentStory<typeof UISelect> = (args) => (
  <UISelect {...args} />
);

const options: UISelectOptionType[] = [
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
