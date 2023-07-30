import { Table } from "./UITable";
import { Modal } from "./UIModal";
import { Select } from "./UISelect";
import { UIBox as Box } from "./UIBox";
import { UILogo as Logo } from "./UILogo";
import { UIBadge as Badge, IUIBadgeProps } from "./UIBadge";
import { UILoader as Loader } from "./UILoader";
import { UIPortal as Portal } from "./UIPortal";
import { UIButton as Button } from "./UIButton";
import { UISlider as Slider, UISliderItem as SliderItem } from "./UISlider";
import { UITooltip as Tooltip } from "./UITooltip";
import { UITriangle as Triangle } from "./UITriangle";
import { UICheckbox as Checkbox, IUIInputCheckboxProps } from "./UICheckbox";
import { UIInput as Input, InputType } from "./UIInput";
import { UILineChart as LineChart } from "./UILineChart";
import { UILoaderPage as LoaderPage } from "./UILoaderPage";
import { UIScrollSlider as ScrollSlider } from "./UIScrollSlider";
import { UIThemeSwitcher as ThemeSwitcher } from "./UIThemeSwitcher";
import { UIToggleCollapseSidebar as ToggleCollapseSidebar } from "./UIToggleCollapseSidebar";
import {
  UISidebarLink as SidebarLink,
  IUISidebarLinkProps,
} from "./UISidebarLink";
import {
  UISidebarLinkList as SidebarLinkList,
  IUISidebarLinkListProps,
} from "./UISidebarLinkList";

import StatisticsCard from "./UIStatisticsCard";

export default {
  Box,
  Logo,
  Table,
  Modal,
  Input,
  Badge,
  Portal,
  Button,
  Slider,
  Loader,
  Select,
  Tooltip,
  Triangle,
  Checkbox,
  LineChart,
  LoaderPage,
  SliderItem,
  SidebarLink,
  ScrollSlider,
  ThemeSwitcher,
  StatisticsCard,
  SidebarLinkList,
  ToggleCollapseSidebar,
};

export { Input, InputType };
export { Badge, IUIBadgeProps };
export { Slider, SliderItem };
export { Checkbox, IUIInputCheckboxProps };
export { SidebarLink, IUISidebarLinkProps };
export { SidebarLinkList, IUISidebarLinkListProps };
