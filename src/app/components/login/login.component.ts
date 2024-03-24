import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../service/serviceLogin';


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
      if (response) {
        this.isLoggedIn = true;
        this.router.navigate(['/sidenav']); 
        console.log("Connected successfully");
        
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