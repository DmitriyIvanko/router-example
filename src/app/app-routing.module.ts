import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    children: [
      {
        loadChildren: './sign-in/sign-in.module#SignInModule',
        path: 'sign-in',
      },
      {
        loadChildren: './user/user.module#UserModule',
        path: 'user',
      },
    ],
    component: AppComponent,
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
