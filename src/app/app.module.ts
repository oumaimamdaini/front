import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Service } from './service/service';
import { ProductListComponent } from './liste-produit/liste-produit.component';
import { UserComponent } from './components/user/user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TestComponent } from './components/test/test.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    UserComponent,
    HomeComponent,
    SidenavComponent,
    TestComponent,
    AddUserComponent
   
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
