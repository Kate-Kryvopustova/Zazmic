import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService]
})

export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
 });

  constructor(private httpService: HttpService) { }

  
  onSubmit(){
    this.httpService
      .mockRequest()
      .subscribe(
        data => console.log(data)
      );
    this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
