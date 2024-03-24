import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rapport } from "../model/Rapport";


@Injectable({providedIn: 'root'})
export class RapportService{
    private baseUrl='http://localhost:8088/springMVC/rapport';

    
    constructor(private http: HttpClient) {}
  getAllReport(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`${this.baseUrl}/getAllRapport`);  
  }
  

  getReportById(idRapport: number): Observable<Rapport> {
    return this.http.get<Rapport>(`${this.baseUrl}/etRapportById/${idRapport}`);
  }

  createReport(rapport: Rapport): Observable<Rapport> {
    return this.http.post<Rapport>(`${this.baseUrl}/createRapport`, rapport);
  }

  updateReport( rapport: Rapport,idRapport: number): Observable<Rapport> {
    return this.http.put<Rapport>(`${this.baseUrl}/updateRapport/${idRapport}`, rapport);
  }

  deleteReport(idRapport: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteRapport/${idRapport}`);
  }

}
