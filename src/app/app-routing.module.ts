import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'feed',
    loadChildren: () => import('./features/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
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
