import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  arr:any;
  private sid: string;
  public entries: Array<any>;
  constructor(private http: Http,
              private authService:AuthService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getitnow(localStorage.getItem('user')["id"]).subscribe(res=>{
      console.log(Array.of(res.json()));
    });
  }
  public create() {
    alert('create a post');
    this.router.navigate(["/pass"], { "queryParams": { "sid": JSON.parse(localStorage.getItem('user'))["id"] } });
  }
  
}
