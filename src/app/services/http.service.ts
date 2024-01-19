import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getProductById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }
}