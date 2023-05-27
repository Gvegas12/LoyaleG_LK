import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer, IFooterProps } from "./Footer";

export default {
  title: "shared/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Footer>;

const StorybookComponent: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IFooterProps;
