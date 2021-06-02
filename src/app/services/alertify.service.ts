import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable() //{providedIn: 'root'} //eğer bu olursa global service olur
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }
}
