import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header, IHeaderProps } from "./Header";

export default {
  title: "widgets/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

const StorybookComponent: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IHeaderProps;
