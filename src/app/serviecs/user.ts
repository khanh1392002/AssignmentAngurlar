import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { IUser } from "../model/user";

@Injectable({
    providedIn: 'root',
})
export class UserServiecs {
    API_URL: string = 'http://localhost:3000/user';
    
    constructor(private http : HttpClient){}
        getUser(): Observable<IUser[]>{
            return this.http.get<IUser[]>(`${this.API_URL}`)
        }
        getUsers(id: number) : Observable<IUser>{
            return this.http.get<IUser>(`${this.API_URL}/${id}`)
        }
        removeUser(id: number) : Observable<IUser>{
            return this.http.delete<IUser>(`${this.API_URL}/${id}`)
        }
        addUser(data: any) : Observable<IUser>{
            return this.http.post<IUser>(`${this.API_URL}`, data)
        }
        updateUser(data: any){
            return this.http.put<IUser>(`${this.API_URL}/${data.id}`, data)
        }
    
}