import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { HelloBlockComponent } from './components/hello-block/hello-block.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoModule } from '../../shared/logo/logo.module';
import { ButtonModule } from '../../shared/button/button.module';
import { InputModule } from '../../shared/input/input.module';


@NgModule({
  declarations: [
    HelloBlockComponent,
    LayoutComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    LogoModule,
    ButtonModule,
    InputModule
  ],
  exports: [
    HelloBlockComponent,
    LayoutComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent
  ]
})
export class AuthModule { }
