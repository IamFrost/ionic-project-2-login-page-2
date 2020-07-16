import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageTwoPage } from './login-page-two.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageTwoPageRoutingModule {}
