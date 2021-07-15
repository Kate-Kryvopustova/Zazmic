import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements DoCheck {

  button ='LOGIN';
  helperUserNameText = 'Up to 40 symbols';
  name = 'text';
  labelName = 'Username';
  labelPassword = 'Password';
  passwordType = 'password';
  helperUserPasswordText = '8 symbols or more';
  userSVG = 'assets/images/svg/login/user.svg';
  passwordSVG = 'assets/images/svg/login/key.svg';
  typeButton = 'submit';
  disable: boolean = true;
  buttonSVG = 'assets/images/svg/login/login.svg';

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.form = new FormGroup({
      identifier: new FormControl('', [
        Validators.required,
        Validators.maxLength(40)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });   
  }

  
  ngDoCheck(): void {
    if (this.form.invalid) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  
  onSubmit(){
    const data = this.form.value;

    if (this.form.invalid) {
      return;
    }

    if(this.authService.isLoggedIn) {
      this.authService.deleteToken();
      this.authService.signIn(data);
    } else {
      this.authService.signIn(data);
    }

    this.form.reset()
  }

}
