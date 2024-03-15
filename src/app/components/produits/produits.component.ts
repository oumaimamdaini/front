import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/Produit';
import { ProduitService } from '../../service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit{
  listProduit! : Produit[];
  produit:Produit=new Produit();
  idProduit!:number;


  constructor(private produitservice:ProduitService, private route:Router){}
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
    this.produitservice.getAllProduit().subscribe(
      res=>{
        console.log("res",res);
        this.listProduit=res 
     
      } )          
  }
  createProduit(): void {
    this.produitservice.createProduit(this.produit)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.produitservice.getAllProduit().subscribe(
          res=>{
            console.log("res",res);
            this.listProduit=res
          }
        )
      });
  
  
    }
    
    updateProduit() {
      this.produitservice.updateProduit(this.idProduit, this.produit).subscribe((response) => {
        this.produitservice.getAllProduit().subscribe(
          (res) => {
            console.log("res", res);
            this.listProduit = res;
          }
        );
      });
      this.route.navigate(['/listUser']);
    }

    getId(idProduit : number){
      this.idProduit = idProduit;
      this.produitservice.getById(idProduit).subscribe((data)=>{
        this.produit = data      
      })
    }
    deleteProduit(idProduit: number): void {
      this.produitservice.deleteProduit(idProduit).subscribe(
        () => {
          console.log('User deleted successfully');
          this.produitservice.getAllProduit(); // Actualiser la liste des utilisateurs après la suppression
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }






}


