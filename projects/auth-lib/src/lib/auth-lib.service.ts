import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {
  private userName: string;
  private password: string;

  public get user_name(): string {
    return this.userName;
  }

  public get user_password(): string {
    return this.password;
  }

  constructor() {}

  public login(userName: string, password: string): void {
    if (userName && password) {
      this.userName = userName;
      this.password = password;
    }
  }
}
