import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  fireLogin: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)])
  })

  get controlName() {
    return this.loginForm.controls;
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.fireLogin = true;
    this._router.navigate(['/home']);
    // this._auth.login(this.loginForm.value).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     if (res.message == 'success') {
    //       localStorage.setItem('userToken', res.token);
    //       this._auth.saveUserData();
    //       this._router.navigate(['/home']);
    //     } else {
    //       this.errorMessage = res.message
    //       this.fireLogin = false
    //     }
    //   },
    //   error: (err: any) => {

    //   },
    //   complete: () => {
    //     console.log("complete");

    //   }
    // })
  }

}
