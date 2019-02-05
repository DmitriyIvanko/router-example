import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router'; // for [routerLink];

import { LayoutRoutingModule } from './sign-in-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
  ],
  declarations: [
    SignInComponent,
  ],
})
export class SignInModule { }
