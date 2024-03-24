import { Component, OnInit } from '@angular/core';

import { Checklists } from '../../model/Checklists';
import { ChecklistService } from '../../service/Checklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrl: './checklists.component.css'
})
export class ChecklistsComponent implements OnInit{
  listChecklist! : Checklists[];
  checklist:Checklists=new Checklists();
  idChecklist!:number;


  constructor(private checklistservice:ChecklistService, private route:Router){}
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
    this.checklistservice.getAllChecklist().subscribe(
      res=>{
        console.log("res",res);
        this.listChecklist=res 
     
      } )          
  }
  createChecklist(): void {
    this.checklistservice.createChecklist(this.checklist)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.checklistservice.getAllChecklist().subscribe(
          res=>{
            console.log("res",res);
            this.listChecklist=res
          }
        )
      });
  
  
    }
    
    getAllChecklist(){
      this.checklistservice.getAllChecklist().subscribe(
        res=>{
          console.log("res",res);
          this.listChecklist=res 
       
        }                
      )
    }
    
    updateChecklist(id:number) {
      this.checklistservice.updateChecklist(id,this.checklist).subscribe(
        () => {
        //this.userservice.getAllUsers().subscribe(
            //console.log("res", res);
            //this.listUser = res;
            console.log('Checklist updated successfully');
           // this.userservice.getAllUsers();
           this.getAllChecklist();
          
          
          },
            (error)=>{
              console.error('Error deleting user:', error);
            }
        );
      }

    getgetChecklistById(idChecklist : number){
      this.idChecklist = idChecklist;
      this.checklistservice.getChecklistById(idChecklist).subscribe((data)=>{
        this.checklist = data      
      })
    }
    deleteChecklist(idChecklist: number): void {
      this.checklistservice.deleteChecklist(idChecklist).subscribe(
        () => {
          console.log('User deleted successfully');
          this.checklistservice.getAllChecklist(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }

    openUpdateModal(idChecklist: number){
      this.checklist.idChecklist= idChecklist;
    }




}




