import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/Rx";

@Component({
  selector: 'app-passwordstorage',
  templateUrl: './passwordstorage.component.html',
  styleUrls: ['./passwordstorage.component.css']
})
export class PasswordstorageComponent implements OnInit {
  private sid: string;
  public input: any;
  constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    this.input = {
      "title": "",
      "content": ""
  };
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.sid = params["sid"];
  });
  }
  public save() {
    if(this.input.title && this.input.content) {
        let headers = new Headers({
            "content-type": "application/json",
            "authorization": "Bearer " + this.sid
        });
        let options = new RequestOptions({ headers: headers });
        this.http.post("http://localhost:3000/users/passwordstorage", JSON.stringify(this.input), options)
            .map(result => result.json())
            .subscribe(result => {
                this.location.back();
            });
    }
}
}

