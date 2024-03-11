import { Component, OnInit } from '@angular/core';
import { Profile, User,  } from './user';

import { UserService } from './userService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  listUser!:User[];
  profile = Profile;
   user: User = new User();
   showModal = false;
   idUser! : number; 


 constructor(private userservice:UserService, private route:Router){}


  ngOnInit(): void {

    this.userservice.getAllUsers().subscribe(
      res=>{
        console.log("res",res);
        this.listUser=res
      }
    )
  }

  createUser(): void {
    this.userservice.createUser(this.user)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.userservice.getAllUsers().subscribe(
          res=>{
            console.log("res",res);
            this.listUser=res
          }
        )
      });
  
  
    }
    closeModal() {
      this.showModal = false;
    }

    update() {
      this.userservice.update(this.idUser, this.user).subscribe((response) => {
        this.userservice.getAllUsers().subscribe(
          (res) => {
            console.log("res", res);
            this.listUser = res;
          }
        );
      });
      this.route.navigate(['/listUser']);
    }

    getId(id : number){
      this.idUser = id;
      this.userservice.getById(id).subscribe((data)=>{
        this.user = data      
      })
    }

}