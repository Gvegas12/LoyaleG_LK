import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./UIModal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const StorybookComponent: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
