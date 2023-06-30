export enum AuthRoutesEnum {
  HOME = "home",
  TELEGRAM = "telegram",
  ESTABLISHMENTS = "establishments",
  ESTABLISHMENT_ITEM = "establishment_item",
  CUSTOMERS = "customers",
  CUSTOMER = "customer",
  SETTINGS = "settings",
  SUPPORT = "support",
  ABOUT = "about",
  USERS = "users",
}

export const authRoutePaths: Record<AuthRoutesEnum, string> = {
  [AuthRoutesEnum.HOME]: "/",
  [AuthRoutesEnum.TELEGRAM]: "/telegram",
  [AuthRoutesEnum.ESTABLISHMENTS]: "/establishments",
  [AuthRoutesEnum.ESTABLISHMENT_ITEM]: `/${AuthRoutesEnum.ESTABLISHMENTS}/:id`,
  [AuthRoutesEnum.CUSTOMERS]: "/customers",
  [AuthRoutesEnum.CUSTOMER]: `/${AuthRoutesEnum.CUSTOMERS}/:id`,
  [AuthRoutesEnum.SETTINGS]: "/settings",
  [AuthRoutesEnum.SUPPORT]: "/support",
  [AuthRoutesEnum.ABOUT]: "/about",
  [AuthRoutesEnum.USERS]: "/users",
};
