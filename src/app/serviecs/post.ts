import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { IPost } from "../model/post";

@Injectable({
    providedIn: 'root',
})
export class PostServiecs {
    API_URL: string = 'http://localhost:3000/post';
    
    constructor(private http : HttpClient){}
        getPost(): Observable<IPost[]>{
            return this.http.get<IPost[]>(`${this.API_URL}`)
        }
        getPosts(id: number) : Observable<IPost>{
            return this.http.get<IPost>(`${this.API_URL}/${id}`)
        }
        removePost(id: number) : Observable<IPost>{
            return this.http.delete<IPost>(`${this.API_URL}/${id}`)
        }
        addPost(data: any) : Observable<IPost>{
            return this.http.post<IPost>(`${this.API_URL}`, data)
        }
        updatePost(data: any){
            return this.http.put<IPost>(`${this.API_URL}/${data.id}`, data)
        }
    
}