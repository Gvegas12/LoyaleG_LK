import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddEstablishmentForm } from "./AddEstablishmentForm";

export default {
  title: "shared/AddEstablishmentForm",
  component: AddEstablishmentForm,
  argTypes: {},
} as ComponentMeta<typeof AddEstablishmentForm>;

const StorybookComponent: ComponentStory<typeof AddEstablishmentForm> = (args) => (
  <AddEstablishmentForm {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
