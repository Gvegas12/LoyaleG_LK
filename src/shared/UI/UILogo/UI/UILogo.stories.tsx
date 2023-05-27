import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UILogo, IUILogoProps } from "./UILogo";

export default {
  title: "shared/UILogo",
  component: UILogo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UILogo>;

const StorybookComponent: ComponentStory<typeof UILogo> = (args) => (
  <UILogo {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {} as IUILogoProps;
