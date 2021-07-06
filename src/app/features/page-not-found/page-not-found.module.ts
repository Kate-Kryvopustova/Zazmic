import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from'./page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ButtonModule } from '../../shared/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
