import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from '../../service/User.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  
  //displayedColumns: string[] = ['id', 'nom', 'email', 'password'];
  listUser!:User[];
   user: User = new User();
   showModal = false;
   idUser! : number; 
   showCard: boolean=false;


 constructor(private userservice:UserService, private route:Router){}
 
 openModal(): void {
  const modalDiv =  document.getElementById('exampleModal');
  if(modalDiv!=null){
    modalDiv.style.display= 'block';
  }
 }
 closeModal() {
 
  const modalDiv =  document.getElementById('exampleModal');
  if(modalDiv!=null){
    modalDiv.style.display= 'none';
  }
}

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
    deleteUser(id: number): void {
      this.userservice.deleteUser(id).subscribe(
        () => {
          console.log('User deleted successfully');
          this.userservice.getAllUsers(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }

}