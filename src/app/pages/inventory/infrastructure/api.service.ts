import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  base_URL = "http://localhost:3000/posts";

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.base_URL);
  }

  addItem(data: any): Observable<Item> {
    return this.http.post<Item>(`${this.base_URL}`, data);
  }
  
  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.base_URL}/${id}`);
  } 

  updateItem(id: number, item: any): Observable<Item> {
    return this.http.put<Item>(`${this.base_URL}/${id}`, item);
  }

  getItem(id: number): Observable<Item>  {
    return this.http.get<Item>(`${this.base_URL}/${id}`)
  }



}
