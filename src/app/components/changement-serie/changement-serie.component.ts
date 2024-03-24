import { Component, OnInit } from '@angular/core';
import { Changement } from '../../model/Changement';
import { ChangementService } from '../../service/Changement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changement-serie',
  templateUrl: './changement-serie.component.html',
  styleUrl: './changement-serie.component.css'
})
export class ChangementSerieComponent implements OnInit{
  listChangement! : Changement[];
  changement:Changement=new Changement();
  idChangementSerie!:number;


  constructor(private changementservice:ChangementService, private route:Router){}
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
    this.changementservice.getAllChangementSerie().subscribe(
      res=>{
        console.log("res",res);
        this.listChangement=res 
     
      } )          
  }
  createChangementSerie(): void {
    this.changementservice.createChangementSerie(this.changement)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.changementservice.getAllChangementSerie().subscribe(
          res=>{
            console.log("res",res);
            this.listChangement=res
          }
        )
      });
  
  
    }
    getAllChangement(){
      this.changementservice.getAllChangementSerie().subscribe(
        res=>{
          console.log("res",res);
          this.listChangement=res 
       
        }                
      )
    }
    
    updateChangementSerie(id:number) {
      this.changementservice.updateChangementSerie(this.changement,id).subscribe(
        () => {
        //this.userservice.getAllUsers().subscribe(
            //console.log("res", res);
            //this.listUser = res;
            console.log(' Updated successfully');
           // this.userservice.getAllUsers();
           this.getAllChangement();
          
          
          },
            (error)=>{
              console.error('Error deleting user:', error);
            }
        );
      }

    getChangementSerieById(idChangementSerie : number){
      this.idChangementSerie = this.idChangementSerie;
      this.changementservice.getChangementSerieById(idChangementSerie).subscribe((data)=>{
        this.changement = data      
      })
    }
    deleteChangementSerie(idChangementSeri: number): void {
      this.changementservice.deleteChangementSerie(idChangementSeri).subscribe(
        () => {
          console.log(' deleted successfully');
          this.changementservice.getAllChangementSerie(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting :', error);
        }
      );
    }
    openUpdateModal(idChangementSerie: number){
      this.changement.idChserie= idChangementSerie;
    }





}


