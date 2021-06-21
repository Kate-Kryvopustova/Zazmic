import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FeedComponent } from './components/feed/feed.component';
import { ArticleComponent } from './components/feed/article/article.component';
import { CreateArticleComponent } from './components/feed/article/create-article/create-article.component';
import { EdidArticleComponent } from './components/feed/article/edid-article/edid-article.component';
import { DeleteArticleComponent } from './components/feed/article/delete-article/delete-article.component';
import { UserComponent } from './components/user/user.component';
import { EdidProfileComponent } from './components/user/edid-profile/edid-profile.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserActivityComponent } from './components/dashboard/user-activity/user-activity.component';
import { UserTagsComponent } from './components/dashboard/user-tags/user-tags.component';
import { ChartsActionsComponent } from './components/dashboard/charts-actions/charts-actions.component';
import { ListArticlesComponent } from './components/dashboard/list-articles/list-articles.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    FeedComponent,
    ArticleComponent,
    CreateArticleComponent,
    EdidArticleComponent,
    DeleteArticleComponent,
    UserComponent,
    EdidProfileComponent,
    ChangePasswordComponent,
    DashboardComponent,
    UserActivityComponent,
    UserTagsComponent,
    ChartsActionsComponent,
    ListArticlesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
