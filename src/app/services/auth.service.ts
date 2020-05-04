import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class AuthService {
  authToken:any;
  user: any;
  constructor(private http:Http) { }
  registerUser(user){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers}).pipe(map((res: Response) => res.json()));
  }
  authenticateUser(user){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}).pipe(map((res: Response) => res.json()));
  }
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
  getProfile(){
    let headers= new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:headers}).pipe(map((res: Response) => res.json()));
  }
  loadToken(){
    const token= localStorage.getItem('id_token');
    this.authToken= token;
  }
  loggedIn(){

    if (localStorage.id_token == undefined ){
     console.log('undefined token');
     return true
    } else {
    //console.log('got token');
  const helper = new JwtHelperService();
  //console.log(!helper.isTokenExpired(localStorage.id_token));  
    return helper.isTokenExpired(localStorage.id_token); 
    }
   }

   postitnow(x,y){
    return this.http.post("http://localhost:3000/passes/pass", x, y).map(result => result.json());
   }
   getitnow(x){
    return this.http.get("http://localhost:3000/passes/pass",x);
   }
}

