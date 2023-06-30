import { UserRolesEnum } from "../enums/UserRoleEnum";

export type User = {
  id: number;
  email: string;
  password: string;
  active: boolean;
  firstname: string;
  lastname: string;
  role: UserRolesEnum[];
  createdAt: Date;
  updatedAt: Date;
};

export interface IUserSchema {
  user: User;
  setUser: (data: User) => void;
}
