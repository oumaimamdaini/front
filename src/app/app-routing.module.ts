import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { ChangementSerieComponent } from './components/changement-serie/changement-serie.component';
import { FamilleComponent } from './components/famille/famille.component';
import { TesteurComponent } from './components/testeur/testeur.component';
import { RapportComponent } from './components/rapport/rapport.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FullcomponentComponent } from './fullcomponent/fullcomponent.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path :'users' , component: UserComponent },
  {path:'products',component:ProduitsComponent},
  {path:'interfaces',component:InterfacesComponent},
  {path:'checklists',component:ChecklistsComponent},
  {path:'series-change',component:ChangementSerieComponent},
  { path: 'families', component: FamilleComponent },
  { path: 'testers', component: TesteurComponent },
  { path: 'reports', component: RapportComponent },
  {path:'sidenav',component:SidenavComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
