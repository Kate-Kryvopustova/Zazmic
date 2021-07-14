import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./features/news-feed/news-feed.module').then(m => m.NewsFeedModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
