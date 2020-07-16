import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageOnePageRoutingModule } from './login-page-one-routing.module';

import { LoginPageOnePage } from './login-page-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageOnePageRoutingModule
  ],
  declarations: [LoginPageOnePage]
})
export class LoginPageOnePageModule {}
