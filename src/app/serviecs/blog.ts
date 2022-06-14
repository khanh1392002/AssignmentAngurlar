import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { IProject } from "../model/blog";

@Injectable({
    providedIn: 'root',
})
export class BlogServiecs {
    API_URL: string = 'http://localhost:3000/project';
    
    constructor(private http : HttpClient){}
        getProject(): Observable<IProject[]>{
            return this.http.get<IProject[]>(`${this.API_URL}`)
        }
        getProjects(id: number) : Observable<IProject>{
            return this.http.get<IProject>(`${this.API_URL}/${id}`)
        }
        removeProject(id: number) : Observable<IProject>{
            return this.http.delete<IProject>(`${this.API_URL}/${id}`)
        }
        addProject(data: any) : Observable<IProject>{
            return this.http.post<IProject>(`${this.API_URL}`, data)
        }
        updateProject(data: any){
            return this.http.put<IProject>(`${this.API_URL}/${data.id}`, data)
        }
    
}