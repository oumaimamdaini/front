import { Component, OnInit } from '@angular/core';
import { FamilleService } from "../../service/famille.service"
import { Famille } from '../../model/Famille';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrl: './famille.component.css'
})
export class FamilleComponent implements OnInit{
  listFamille!:Famille[];
   famille: Famille = new Famille();
   showModal = false;
   idFamille! : number; 
   showCard: boolean=false;


 constructor(private familleservice:FamilleService ){}
 ngOnInit(): void {

  this.familleservice.getAllFamily().subscribe(
    res=>{
      console.log("res",res);
      this.listFamille=res 
   
    }                
  )
}
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

  createFamille(): void {
    this.familleservice.createFamily(this.famille)
      .subscribe(response => {
        console.log(response);
        this.familleservice.getAllFamily().subscribe(
          res=>{
            console.log("res",res);
            this.listFamille=res
          })
        });  
    }
    getAllFamily(){
      this.familleservice.getAllFamily().subscribe(
        res=>{
          console.log("res",res);
          this.listFamille=res 
       
        }                
      )
    }
    
    updateFamily(id:number) {
      this.familleservice.updateFamily(id,this.famille).subscribe(
        () => {
        //this.userservice.getAllUsers().subscribe(
            //console.log("res", res);
            //this.listUser = res;
            console.log('Family updated successfully');
           // this.userservice.getAllUsers();
           this.getAllFamily();
          
          
          },
            (error)=>{
              console.error('Error deleting user:', error);
            }
        );
      }
    getId(id : number){
      this.idFamille = id;
      this.familleservice.getFamilyById(id).subscribe((data)=>{
        this.famille = data      
      })
    }
    deleteFamily(id: number): void {
      this.familleservice.deleteFamily(id).subscribe(
        () => {
          console.log('Family deleted successfully');
          this.familleservice.getAllFamily(); 
        },
        (error) => {
          console.error('Error deleting Family:', error);
        }
      );
    }
    openUpdateModal(idFamille: number){
      this.famille.idFamille= idFamille;
    }
}

