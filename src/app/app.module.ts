import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Service } from './service/service';
import { UserComponent } from './components/user/user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TestComponent } from './components/test/test.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProduitsComponent } from './components/produits/produits.component';
import { InterfacesComponent } from './components/interfaces/interfaces.component';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { ChangementSerieComponent } from './components/changement-serie/changement-serie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SidenavComponent,
    TestComponent,
    AddUserComponent,
    ProduitsComponent,
    InterfacesComponent,
    ChecklistsComponent,
    ChangementSerieComponent,
   
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
    
  ],
  providers: [
    provideClientHydration(),Service, provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
