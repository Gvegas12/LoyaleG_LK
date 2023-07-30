export const ApiPaths = {
  USERS: "users",
  SIGNIN: "auth/signin",
  SIGNUP: "auth/signup",
  REFRESH: "auth/refresh",
  LOGOUT: "auth/logout",
  CUSTOMERS: "customers",
  SUBSCRIPTIONS: "subscriptions",
  ESTABLISHMENTS: "establishments",
  ESTABLISHMENT_GOODS: (estb_id: number | string) =>
    `establishments/${estb_id}/goods`,
};
