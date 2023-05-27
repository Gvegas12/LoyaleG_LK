export enum PublicRoutesEnum {
  SIGNIN = "signin",
  SIGNUP = "signup",
  NOT_FOUND = "not_found",
}

export const publicRoutePaths: Record<PublicRoutesEnum, string> = {
  [PublicRoutesEnum.SIGNIN]: "/signin",
  [PublicRoutesEnum.SIGNUP]: "/signup",
  [PublicRoutesEnum.NOT_FOUND]: "*",
};
