import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIModal, IUIModalProps } from "./UIModal";

export default {
  title: "shared/UIModal",
  component: UIModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UIModal>;

const StorybookComponent: ComponentStory<typeof UIModal> = (args) => (
  <UIModal {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IUIModalProps;
