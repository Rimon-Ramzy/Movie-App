import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  erroMessage: string = '';
  fireRegister: boolean = false;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)]),
    age: new FormControl("", [Validators.required, Validators.min(16), Validators.max(60)]),
  })

  get controlName() {
    return this.registerForm.controls
  }

  // if()

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.fireRegister = true
    this._router.navigate(['/login'])
  }


}
