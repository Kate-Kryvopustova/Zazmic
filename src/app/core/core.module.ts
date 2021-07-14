import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SidebarModule,
  ]
})
export class CoreModule { }
