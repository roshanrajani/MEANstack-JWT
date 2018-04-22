import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  authCheck$ = new Subject<any>();
  
  constructor(private _http : HttpClient, private _router : Router, private _cookieService : CookieService) { }

  login(details:any){
    this._http.post('http://localhost:3000/authenticate', details).subscribe((data:any)=> {
      if(data.isLoggedIn){
        this._cookieService.set('token', data.token);
        this.authCheck$.next(data.isLoggedIn);
        this._router.navigate(['/home']);
      }
    });
  }

  checkUsrStatus(){
    return this._cookieService.get('token');
    
  }
  logout(){
   this.data = null;

  }

}
