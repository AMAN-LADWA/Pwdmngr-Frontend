import { Injectable } from '@angular/core';



@Injectable()
export class ValidateService {

  constructor() { }
  validateRegister(user){
    if(user.name==""||user.password==""||user.username==""||user.email==""){
      return false;
  }else{
      return true;
  }
}
}