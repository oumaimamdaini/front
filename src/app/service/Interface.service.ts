import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Interface } from "../model/Interface";


@Injectable({providedIn: 'root'})
export class InterfaceService{
    private baseUrl='http://localhost:8088/springMVC/interface';

    
    constructor(private http: HttpClient) {}
    getAllInterface(): Observable<Interface[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllInterface`);
    
  }
  

  getInterfaceById(idInterface: number): Observable<Interface> {
    return this.http.get<Interface>(`${this.baseUrl}/${idInterface}`);
  }

  createInterface(interfacee: Interface): Observable<Interface> {
    return this.http.post<Interface>(`${this.baseUrl}/createInterface`, interfacee);
  
  }

  updateInterface(idInterface: number, interfacee: Interface): Observable<Interface> {
    return this.http.put<Interface>(`${this.baseUrl}/updateInterface/${idInterface}`, interfacee);
  }

  deleteInterface(idInterface: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteInterface/${idInterface}`);
  }

}
