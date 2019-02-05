import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
})
export class SignInModule { }
