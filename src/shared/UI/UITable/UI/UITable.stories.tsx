import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./UITable";
import type { IUITableProps } from "../types";

export default {
  title: "shared/UITable",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Table>;

const StorybookComponent: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {} as IUITableProps;
