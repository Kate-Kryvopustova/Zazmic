import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NavigationModule } from '../../core/navigation/navigation.module';
import { HelloBlockModule } from '../../shared/hello-block/hello-block.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    NavigationModule,
    HelloBlockModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
