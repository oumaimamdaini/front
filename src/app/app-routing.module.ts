import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { ChangementSerieComponent } from './components/changement-serie/changement-serie.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {path : 'User' , component: UserComponent },
  {path: 'SideNav' , component:SidenavComponent},
  {path:'Produits',component:ProduitsComponent},
  {path:'Interfaces',component:InterfacesComponent},
  {path:'Checklists',component:ChecklistsComponent},
  {path:'ChangemenrDeSerie',component:ChangementSerieComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
