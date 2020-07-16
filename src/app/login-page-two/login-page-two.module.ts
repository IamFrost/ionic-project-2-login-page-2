import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageTwoPageRoutingModule } from './login-page-two-routing.module';

import { LoginPageTwoPage } from './login-page-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageTwoPageRoutingModule
  ],
  declarations: [LoginPageTwoPage]
})
export class LoginPageTwoPageModule {}
