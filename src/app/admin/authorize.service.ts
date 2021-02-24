import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  loginLink = "http://udblog.medianewsonline.com/API/login"; //?username=user&password=user
  signupLink = "http://udblog.medianewsonline.com/API/signup/?nick=user&fname=adami&sname=adamiani&bDate=2001-02-21&gender=2&";
  checkLink = "http://udblog.medianewsonline.com";
  constructor(private http:HttpClient) { }
  login(user:any, pwd:any){
    this.http.get(this.loginLink + "/?username="+ user + "&password="+ pwd).subscribe( (data:any) =>{
      if(data.verified === "0"){
        localStorage.setItem("token",data.token);
      }
      else{
        alert("password was incorenct");
      }
    });
  }
  signup(mail:any, user:any, pwd:any){
    //username=user&passcode=user&email=user@mail.com
    this.http.get(this.signupLink + "username=" + user + "&passcode=" + pwd + "&email=" + mail);
  }
  check(api_key:any): any{
    return this.http.get(this.checkLink + "/?token=" + api_key);
  }
}
