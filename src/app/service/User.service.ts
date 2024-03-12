import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/User";


@Injectable({providedIn: 'root'})
export class UserService{
    private baseUrl='http://localhost:8088/springMVC/user';

    
    constructor(private http: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllUsers`);
    
  }
  

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/createUser`, user);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
