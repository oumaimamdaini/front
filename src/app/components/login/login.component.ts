import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../service/service'; // Assurez-vous d'importer votre service




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
      console.log(response)
      this.router.navigate(['/user']); 
      if (response.success) {
        this.isLoggedIn = true;
        
        
      } else {
        this.message = "Login failed. Please try again.";
      }
    });
  }
  navigRegistre(){
    console.log('Navigating to /registre');
    this.router.navigate(['/registre']); 
      
  }
}
