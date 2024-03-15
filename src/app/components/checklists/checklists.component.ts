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
    
    updateChecklist() {
      this.checklistservice.updateChecklist(this.idChecklist, this.checklist).subscribe((response) => {
        this.checklistservice.getAllChecklist().subscribe(
          (res) => {
            console.log("res", res);
            this.listChecklist = res;
          }
        );
      });
      this.route.navigate(['/listChecklist']);
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






}




