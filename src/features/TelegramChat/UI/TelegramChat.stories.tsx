import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TelegramChat } from "./TelegramChat";

export default {
  title: "shared/TelegramChat",
  component: TelegramChat,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TelegramChat>;

const StorybookComponent: ComponentStory<typeof TelegramChat> = (args) => (
  <TelegramChat {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
