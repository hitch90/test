export type UserCreateInput = {
  firstName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
