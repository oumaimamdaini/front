import { Component, OnInit } from '@angular/core';

import { Interface } from '../../model/Interface';
import { InterfaceService } from '../../service/Interface.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrl: './interfaces.component.css'
})
export class InterfacesComponent implements OnInit{
  listInterface! : Interface[];
  interface:Interface=new Interface();
  idInterface!:number;


  constructor(private interfaceservice:InterfaceService, private route:Router){}
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
    this.interfaceservice.getAllInterface().subscribe(
      res=>{
        console.log("res",res);
        this.listInterface=res 
     
      } )          
  }
  createInterface(): void {
    this.interfaceservice.createInterface(this.interface)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.interfaceservice.getAllInterface().subscribe(
          res=>{
            console.log("res",res);
            this.listInterface=res
          }
        )
      });
  
  
    }
    
    getAllInterface(){
      this.interfaceservice.getAllInterface().subscribe(
        res=>{
          console.log("res",res);
          this.listInterface=res 
       
        }                
      )
    }
    
    updateInterface(id:number) {
      this.interfaceservice.updateInterface(id,this.interface).subscribe(
        () => {
        //this.userservice.getAllUsers().subscribe(
            //console.log("res", res);
            //this.listUser = res;
            console.log('Interface updated successfully');
           // this.userservice.getAllUsers();
           this.getAllInterface();
          
          
          },
            (error)=>{
              console.error('Error deleting user:', error);
            }
        );
      }

    getInterfaceById(idInterface : number){
      this.idInterface = idInterface;
      this.interfaceservice.getInterfaceById(idInterface).subscribe((data)=>{
        this.interface = data      
      })
    }
    deleteInterface(idInterface: number): void {
      this.interfaceservice.deleteInterface(idInterface).subscribe(
        () => {
          console.log('User deleted successfully');
          this.interfaceservice.getAllInterface(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
    openUpdateModal(idInterface: number){
      this.interface.idInterface= idInterface;
    }





}



