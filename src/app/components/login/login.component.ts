import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './service'; // Assurez-vous d'importer votre service
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string='';
  password: string='';
  isLoggedIn: boolean = false;
  message: string='';

  constructor(private service: Service, private router: Router) {}

  login() {
    this.service.login(this.email, this.password).subscribe((response) => {
      if (response.success) {
        this.isLoggedIn = true;
        this.router.navigate(['/home']); // Rediriger vers la page d'accueil
      } else {
        this.message = "Login failed. Please try again.";
      }
    });
  }
}
