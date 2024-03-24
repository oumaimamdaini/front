import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Testeur } from "../model/Testeur";

@Injectable({
  providedIn: 'root'
})
export class TesteurService {
  private baseUrl='http://localhost:8088/springMVC/testeur';
  constructor(private http: HttpClient) { }

  getAllTesters(): Observable<Testeur[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getTesteurs`);
    
  }
  

  getTesterById(idTesteur: number): Observable<Testeur> {
    return this.http.get<Testeur>(`${this.baseUrl}getTesteurById/${idTesteur}`);
  }

  createTester(testeur: Testeur): Observable<Testeur> {
    return this.http.post<Testeur>(`${this.baseUrl}/createTesteur`, testeur);
  
  }

  updateTester(idTesteur: number, testeur: Testeur): Observable<Testeur> {
    return this.http.put<Testeur>(`${this.baseUrl}/updateTesteur/${idTesteur}`, testeur);
  }

  deleteTester(idTesteur: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteTesteur/${idTesteur}`);
  }
}
