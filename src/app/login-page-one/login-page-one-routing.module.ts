import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageOnePage } from './login-page-one.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPageOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageOnePageRoutingModule {}
