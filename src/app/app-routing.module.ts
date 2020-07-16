import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-page-one',
    pathMatch: 'full'
  },
  {
    path: 'login-page-one',
    loadChildren: () => import('./login-page-one/login-page-one.module').then( m => m.LoginPageOnePageModule)
  },
  {
    path: 'login-page-two',
    loadChildren: () => import('./login-page-two/login-page-two.module').then( m => m.LoginPageTwoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
