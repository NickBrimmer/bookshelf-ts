export type User = {
  id: string;
  token: string;
  username: string;
};

export interface UserInput {
  username: HTMLInputElement | string;
  password: HTMLInputElement | string;
}
