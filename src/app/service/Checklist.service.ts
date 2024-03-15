import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Checklists } from "../model/Checklists";


@Injectable({providedIn: 'root'})
export class ChecklistService{
    private baseUrl='http://localhost:8088/springMVC/checklist';

    
    constructor(private http: HttpClient) {}
    getAllChecklist(): Observable<Checklists[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllChecklist`);
    
  }
  
  getChecklistById(idChecklist: number): Observable<Checklists> {
    return this.http.get<Checklists>(`${this.baseUrl}/${idChecklist}`);
  }

  createChecklist(checklist: Checklists): Observable<Checklists> {
    return this.http.post<Checklists>(`${this.baseUrl}/createChecklist`, checklist);
  
  }

  updateChecklist(idChecklist: number, checklist: Checklists): Observable<Checklists> {
    return this.http.put<Checklists>(`${this.baseUrl}/updateChecklist/${idChecklist}`, checklist);
  }

  deleteChecklist(idChecklist: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteChecklist/${idChecklist}`);
  }

}
