import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { FeedComponent } from './feed.component';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule
  ],
  exports: [
    FeedComponent
  ]
})
export class NewsFeedModule { }
