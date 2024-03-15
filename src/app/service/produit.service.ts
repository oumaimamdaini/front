import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produit } from "../model/Produit";


@Injectable({providedIn: 'root'})
export class ProduitService{

private baseUrl='http://localhost:8088/springMVC/produit';

    
constructor(private http: HttpClient) {}
getAllProduit(): Observable<Produit[]> {
return this.http.get<any[]>(`${this.baseUrl}/getAllProduit`);

}


getById(id: number): Observable<Produit> {
return this.http.get<Produit>(`${this.baseUrl}/${id}`);
}

createProduit(produit: Produit): Observable<Produit> {
return this.http.post<Produit>(`${this.baseUrl}/createProduit`, produit);

}

updateProduit(idProduit: number, produit: Produit): Observable<Produit> {
return this.http.put<Produit>(`${this.baseUrl}/updateProduit/${idProduit}`, produit);
}

deleteProduit(idProduit: number): Observable<void> {
return this.http.delete<void>(`${this.baseUrl}/deleteProduit/${idProduit}`);
}

}


