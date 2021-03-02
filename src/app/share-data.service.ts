import { Injectable } from '@angular/core';
import { UserInformation } from './modal/userInformation';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  userInfo: UserInformation;

  constructor() { }
  setOption(user: UserInformation) {      
    this.userInfo = user;  
  }  
  
  getOption() {  
    return this.userInfo;  
  }

}