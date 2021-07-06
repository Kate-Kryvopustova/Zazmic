import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LogoModule } from '../../shared/logo/logo.module';
import { ButtonModule } from '../../shared/button/button.module';
import { InputModule } from '../../shared/input/input.module';
import { HelloBlockModule } from '../../shared/hello-block/hello-block.module';
import { NavigationModule } from '../../core/navigation/navigation.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    LogoModule,
    ButtonModule,
    InputModule,
    HelloBlockModule,
    NavigationModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
