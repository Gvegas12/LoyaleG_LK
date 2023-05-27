import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIThemeSwitcher, IUIThemeSwitcherProps } from "./UIThemeSwitcher";

export default {
  title: "shared/UIThemeSwitcher",
  component: UIThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIThemeSwitcher>;

const StorybookComponent: ComponentStory<typeof UIThemeSwitcher> = (args) => (
  <UIThemeSwitcher {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUIThemeSwitcherProps;
