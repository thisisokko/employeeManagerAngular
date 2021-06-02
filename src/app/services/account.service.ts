import { Injectable } from '@angular/core';
import { User } from '@app/login/user';


@Injectable()
export class AccountService {

  constructor() { }
  loggedIn=false;

  login(user:User):boolean{
    if(user.userName=="okan" && user.password=="123456"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
