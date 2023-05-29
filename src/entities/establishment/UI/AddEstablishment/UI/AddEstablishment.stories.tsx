import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddEstablishment, IAddEstablishmentProps } from "./AddEstablishment";

export default {
  title: "shared/AddEstablishment",
  component: AddEstablishment,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AddEstablishment>;

const StorybookComponent: ComponentStory<typeof AddEstablishment> = (args) => (
  <AddEstablishment {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {} as IAddEstablishmentProps;
