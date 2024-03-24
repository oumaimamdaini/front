import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Changement } from "../model/Changement";


@Injectable({providedIn: 'root'})
export class ChangementService{
    private baseUrl='http://localhost:8088/springMVC/changementserie';

    
    constructor(private http: HttpClient) {}
    getAllChangementSerie(): Observable<Changement[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getChangementSerie`);
    
  }
  
  getChangementSerieById(idChangementSerie: number): Observable<Changement> {
    return this.http.get<Changement>(`${this.baseUrl}/${idChangementSerie}`);
  }

  createChangementSerie(changement: Changement): Observable<Changement> {
    return this.http.post<Changement>(`${this.baseUrl}/createChangementSerie`, changement);
  
  }

  updateChangementSerie( changement: Changement,idChangementSerie: number): Observable<Changement> {
    return this.http.put<Changement>(`${this.baseUrl}/updateChangementSerie/${idChangementSerie}`, changement);
  }

  deleteChangementSerie(idChangementSerie: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteChangementSerie/${idChangementSerie}`);
  }

}
