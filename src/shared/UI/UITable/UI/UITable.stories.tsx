import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UITable } from "./UITable";
import type { IUITableProps } from "../types";

export default {
  title: "shared/UITable",
  component: UITable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UITable>;

const StorybookComponent: ComponentStory<typeof UITable> = (args) => (
  <UITable {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {} as IUITableProps;
