import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NgForm } from '@angular/forms';
import { User } from '@app/login/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  model:User=new User();
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.model);
  }
}
