import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddEstablishment } from "./AddEstablishment";

export default {
  title: "shared/AddEstablishment",
  component: AddEstablishment,
  argTypes: {},
} as ComponentMeta<typeof AddEstablishment>;

const StorybookComponent: ComponentStory<typeof AddEstablishment> = (args) => (
  <AddEstablishment {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
