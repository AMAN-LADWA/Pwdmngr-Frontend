import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authh: boolean = false;
  tokk: any;   
  constructor(public authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
  this.authService.logout ();
  alert('youre logged out');
  this.router.navigate(['/login']);
  return false;
}


}
