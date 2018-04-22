import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  toggleMenuItems : any = false;

  constructor(private _authService : AuthService, private _router : Router) { }

  ngOnInit() {
    this._authService.authCheck$.subscribe((data) => {
      this.toggleMenuItems = data;
    });
    this.toggleMenuItems = this._authService.checkUsrStatus();
    console.log(this.toggleMenuItems);
  }
  logoutClick(){
    this._authService.logout();
    this._router.navigate(['/login']);

  }

}
