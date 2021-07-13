import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: '', component: FeedComponent
  },
  {
    path: ':id', component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule { }
