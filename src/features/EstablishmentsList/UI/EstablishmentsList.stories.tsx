import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EstablishmentsList } from "./EstablishmentsList";

export default {
  title: "shared/EstablishmentsList",
  component: EstablishmentsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EstablishmentsList>;

const StorybookComponent: ComponentStory<typeof EstablishmentsList> = (args) => (
  <EstablishmentsList {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
