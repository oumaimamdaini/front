import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { UserComponent } from './components/user/user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {path : 'User' , component: UserComponent },
  {path: 'SideNav' , component:SidenavComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
