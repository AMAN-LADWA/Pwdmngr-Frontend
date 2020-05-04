import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  loginsubmit(form){
    const user={
    username: form.value.username,
    password: form.value.password 
  }
  this.authService.authenticateUser(user).subscribe(data=>{
    if(data.success){
        this.authService.storeUserData(data.token,data.user);
         alert('youre now logged in');
         this.router.navigate(['profile']);
    }else{
      alert('cannot auhorise the user');
      this.router.navigate(['login']);
    }
  });
}

}
