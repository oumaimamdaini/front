import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Famille } from"../model/Famille";

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  private baseUrl='http://localhost:8088/springMVC/famille';
  constructor(private http: HttpClient) { }

  getAllFamily(): Observable<Famille[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getFamille`);
    
  }
  getFamilyById(idFamille: number): Observable<Famille> {
    return this.http.get<Famille>(`${this.baseUrl}/getFamilleById/${idFamille}`);
  }
  createFamily(famille: Famille): Observable<Famille> {
    return this.http.post<Famille>(`${this.baseUrl}/create`, famille); }

    updateFamily(idFamille: number, famille: Famille): Observable<Famille> {
    return this.http.put<Famille>(`${this.baseUrl}/updateFamille/${idFamille}`, famille);
  }
  deleteFamily(idFamille: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteFamille/${idFamille}`);
  }
}
