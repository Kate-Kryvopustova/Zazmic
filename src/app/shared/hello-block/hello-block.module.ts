import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloBlockComponent } from './hello-block.component';


@NgModule({
  declarations: [
    HelloBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloBlockComponent
  ]
})
export class HelloBlockModule { }
