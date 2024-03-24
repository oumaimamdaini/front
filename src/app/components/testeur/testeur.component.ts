import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Testeur } from '../../model/Testeur';
import { TesteurService } from '../../service/testeur.service';
@Component({
  selector: 'app-testeur',
  templateUrl: './testeur.component.html',
  styleUrl: './testeur.component.css'
})
export class TesteurComponent implements OnInit {
  listTesteurs!:Testeur[];
   testeur: Testeur = new Testeur();
   showModal = false;
   idTesteur! : number; 
   showCard: boolean=false;
   constructor(private testeurservice:TesteurService, private route:Router){}
 
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

  this.testeurservice.getAllTesters().subscribe(
    res=>{
      console.log("res",res);
      this.listTesteurs=res 
   
    }                
  )
}

createTesters(): void {
  this.testeurservice.createTester(this.testeur)
    .subscribe(response => {
      console.log(response);
      this.testeurservice.getAllTesters().subscribe(
        res=>{
          console.log("res",res);
          this.listTesteurs=res
        }
      )
    });


  }
  getAllTesters(){
    this.testeurservice.getAllTesters().subscribe(
      res=>{
        console.log("res",res);
        this.listTesteurs=res 
     
      }                
    )
  }
  
  updateTester(id:number) {
    this.testeurservice.updateTester(id,this.testeur).subscribe(
      () => {
      //this.userservice.getAllUsers().subscribe(
          //console.log("res", res);
          //this.listUser = res;
          console.log('Tester updated successfully');
         // this.userservice.getAllUsers();
         this.getAllTesters();
        
        
        },
          (error)=>{
            console.error('Error deleting user:', error);
          }
      );
    }

  getId(id : number){
    this.idTesteur = id;
    this.testeurservice.getTesterById(id).subscribe((data)=>{
      this.testeur = data      
    })
  }
  deleteTester(id: number): void {
    console.log("ID before delete:", id);
    this.testeurservice.deleteTester(id).subscribe(
      () => {
        console.log('Testers deleted successfully');
        this.testeurservice.getAllTesters(); // Actualiser la liste des utilisateurs après la suppression
      },
      (error) => {
        console.error('Error deleting testers:', error);
      }
    );
  }
  openUpdateModal(testerId: number){
    this.testeur.idTesteur= testerId;
  }
}

