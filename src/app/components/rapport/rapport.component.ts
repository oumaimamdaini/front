import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from "../../model/Rapport";
import { RapportService } from "../../service/Rapport.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.css'
})
export class RapportComponent implements OnInit {
  listRapport!:Rapport[];
   rapport: Rapport = new Rapport();
   showModal = false;
   idRapport! : number; 
   showCard: boolean=false;


 constructor(private rapportService:RapportService, private route:Router){}
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

    this.rapportService.getAllReport().subscribe(
      res=>{
        console.log("res",res);
        this.listRapport=res 
     
      }                
    )
  }
  createReport(): void {
    this.rapportService.createReport(this.rapport)
      .subscribe(response => {
        console.log(response);
        this.rapportService.getAllReport().subscribe(
          res=>{
            console.log("res",res);
            this.listRapport=res
          }
        )
      });
      }
    
    getAllReport(){
      this.rapportService.getAllReport().subscribe(
        res=>{
          console.log("res",res);
          this.listRapport=res 
       
        }                
      )
    }
    
    updateReport(id:number) {
      this.rapportService.updateReport(this.rapport,id).subscribe(
        () => {
        //this.userservice.getAllUsers().subscribe(
            //console.log("res", res);
            //this.listUser = res;
            console.log('REport updated successfully');
           // this.userservice.getAllUsers();
           this.getAllReport();
          
          
          },
            (error)=>{
              console.error('Error deleting user:', error);
            }
        );
      }

    getReportById(id : number){
      this.idRapport = id;
      this.rapportService.getReportById(id).subscribe((data)=>{
        this.rapport = data      
      })
    }
    deleteReport(id: number): void {
      console.log("ID before delete:", id);
      this.rapportService.deleteReport(id).subscribe(
        () => {
          console.log('Report deleted successfully');
          this.rapportService.getAllReport(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting Report:', error);
        }
      );
    }
    openUpdateModal(idRapport: number){
      this.rapport.idRapport= idRapport;
    }

}