export interface User {
  userName: string;
  token: string;
}

export interface Users {
  id: number;
  passwordHash: string;
  passwordSalt: string;
  username: string;
}
