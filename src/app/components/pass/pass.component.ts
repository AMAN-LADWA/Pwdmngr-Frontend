import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router,ActivatedRoute } from "@angular/router";
import {AuthService} from '../../services/auth.service';
import { Location } from "@angular/common";

import "rxjs/Rx";


@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  private sid: string;
  public input: any;

  constructor(private http: Http, private route: ActivatedRoute, private location: Location,private authService:AuthService,
              private router:Router) {
    this.input = {
      "sid":JSON.parse(localStorage.getItem('user'))["id"],
      "title": "",
      "content": ""
  };
   }

  ngOnInit(): void { 
      this.sid = JSON.parse(localStorage.getItem('user'))["id"];
  }
  public save() {
    if(this.input.title && this.input.content) {
        let headers = new Headers({
            "content-type": "application/json",
            "authorization": "Bearer " + this.sid
        });
        let options = new RequestOptions({ headers: headers });

        this.authService.postitnow(JSON.stringify(this.input), options).subscribe(result => {
          });

    }
}
}
