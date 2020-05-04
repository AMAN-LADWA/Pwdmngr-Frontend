import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';
import { AlertService } from '../../_alert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private authService:AuthService,
              private validateService:ValidateService,
              private router:Router,
              protected alertService: AlertService) { }

  ngOnInit() {
  }


register(form) {
    const user={
      name: form.value.name,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    }
    //required  fields
    if(!this.validateService.validateRegister(user)){
      alert('cannot validate the registration');
      this.router.navigate(['/register']);
    }
    //register user
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        console.log('user registered successfully');
        this.router.navigate(['/login']);
      }else{
        alert('user not registered, contact admin');
        this.router.navigate(['/register']);
      }
    })

  }
}
