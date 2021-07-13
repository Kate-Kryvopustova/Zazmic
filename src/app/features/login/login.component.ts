import { Component, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService],
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

  constructor(private httpService: HttpService) {
    this.form = new FormGroup({
      userName: new FormControl('', [
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
    if (this.form.invalid ) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  
  onSubmit(){
    if (this.form.invalid) {
      return;
    }
    // this.httpService
    //   .mockRequest()
    //   .subscribe(
    //     data => console.log(data)
    //   );
    // this.form.reset();

    console.log(this.form.value)
  }

  get userName() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }
}
