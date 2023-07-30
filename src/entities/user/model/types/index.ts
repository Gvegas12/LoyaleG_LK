import { Subscription } from "@/entities/subscriptions";
import { Establishment } from "@/entities/establishments";
import { UserRolesEnum } from "../enums/UserRoleEnum";

export type User = {
  id: number;
  email: string;

  password?: string;

  active: boolean;

  firstname: string;

  lastname: string;

  rolesEnum: UserRolesEnum[];

  subscriptionId: number;

  subscription: Subscription;

  establishments?: Establishment[] | null;

  workplaces?: Establishment[];

  createdAt: Date;
  updatedAt: Date;
};

export type BotApiAuthData = {
  text: string;
  code: number;
};

export type BotApiAuthDataResponse = {
  pool: BotApiAuthData[];
};

export interface IAdminSchema {
  authCodeData: BotApiAuthDataResponse["pool"];
  setAuthCodeData: (data: BotApiAuthDataResponse["pool"]) => void;
}

export interface IUserSchema extends IAdminSchema {
  user: User;
  setUser: (data: User) => void;
}
