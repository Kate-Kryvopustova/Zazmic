import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { FeedComponent } from './feed.component';
import { TagsModule } from '../../shared/tags/tags.module';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    FeedComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    TagsModule,
  ],
  exports: [
    FeedComponent,
    ArticleComponent
  ]
})
export class NewsFeedModule { }
