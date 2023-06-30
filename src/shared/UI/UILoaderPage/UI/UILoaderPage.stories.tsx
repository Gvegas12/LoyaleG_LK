import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UILoaderPage, IUILoaderPageProps } from "./UILoaderPage";

export default {
  title: "shared/UILoaderPage",
  component: UILoaderPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UILoaderPage>;

const StorybookComponent: ComponentStory<typeof UILoaderPage> = (args) => (
  <UILoaderPage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
