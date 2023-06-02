import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EntityPage, IEntityPageProps } from "./EntityPage";

export default {
  title: "shared/EntityPage",
  component: EntityPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EntityPage>;

const StorybookComponent: ComponentStory<typeof EntityPage> = (args) => (
  <EntityPage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {} as IEntityPageProps;
