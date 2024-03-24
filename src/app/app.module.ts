import { NgModule, SimpleChange } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Service } from './service/service';
import { UserComponent } from './components/user/user.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AddUserComponent } from './components/add-user/add-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProduitsComponent } from './components/produits/produits.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { ChangementSerieComponent } from './components/changement-serie/changement-serie.component';
import { FamilleComponent } from './components/famille/famille.component';
import { RapportComponent } from './components/rapport/rapport.component';
import { TesteurComponent } from './components/testeur/testeur.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FullcomponentComponent } from './fullcomponent/fullcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AddUserComponent,
    ProduitsComponent,
    InterfacesComponent,
    ChecklistsComponent,
    ChangementSerieComponent,
    FamilleComponent,
    RapportComponent,
    TesteurComponent,
    SidenavComponent,
    FullcomponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,MatSortModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSidenavModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration(),Service, provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
