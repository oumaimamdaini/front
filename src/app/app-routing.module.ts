import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : 'User' , component: UserComponent },
  {path: 'SideNav' , component:SidenavComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
