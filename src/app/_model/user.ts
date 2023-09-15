export class LoginUser {
  public userId: number = 0;
  public userName: string = '';
  public password: string = '';
  public role: string = '';
}

export class DisplayLoginUser {
  userId: number;
  userName: string;
  password: string;
  role: string;

  constructor(
    userId: number,
    username: string,
    password: string,
    role: string
  ) {
    this.userId = userId;
    this.userName = username;
    this.password = password;
    this.role = role;
  }
}
