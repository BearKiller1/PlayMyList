import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router  } from '@angular/router';

import { AuthorizeService } from './admin/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  checker:any;

  constructor(private Obj:AuthorizeService, private route:ActivatedRoute, private router:Router){}

  canActivate(): any{
    if(!!localStorage.getItem("token")){
      var api = localStorage.getItem("token");

      this.Obj.check(api).subscribe( (data:any) =>{
        this.checker = data.result
      })

      if(this.checker){
        return true;
      }
      else{
        return false;
      }
    }
  }
  
}
