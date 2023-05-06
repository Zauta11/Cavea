import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>("http://localhost:3000/posts")
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>("http://localhost:3000/posts/" + id);
  }
}
