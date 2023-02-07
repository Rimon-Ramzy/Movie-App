import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  islogin2: boolean = false

  constructor(private _auth: AuthService) {
    console.log(location.hash.includes("login"));
    if (location.hash.includes("login")) {
      this.islogin2 = false;
    } else {
      this.islogin2 = true;
    }

    console.log(this._auth.userData);
    this._auth.userData.subscribe({
      next: (res: any) => {
        console.log(res);
        if (res) {
          this.isLogin = true;
        } else {
          this.isLogin = false
        }
      }
    })

  }


  ngOnInit(): void {
  }

  fireLogin() {
    this._auth.logout();
  }
}
