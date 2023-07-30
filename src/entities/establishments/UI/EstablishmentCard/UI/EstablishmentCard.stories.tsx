import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EstablishmentCard } from "./EstablishmentCard";

export default {
  title: "shared/EstablishmentCard",
  component: EstablishmentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EstablishmentCard>;

const StorybookComponent: ComponentStory<typeof EstablishmentCard> = (args) => (
  <EstablishmentCard {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
