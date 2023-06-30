export enum PublicRoutesEnum {
  AUTH = "auth",
  SIGNUP = "signup",
  NOT_FOUND = "not_found",
}

export const publicRoutePaths: Record<PublicRoutesEnum, string> = {
  [PublicRoutesEnum.AUTH]: "/auth",
  [PublicRoutesEnum.SIGNUP]: "/auth/signup",
  [PublicRoutesEnum.NOT_FOUND]: "*",
};
