import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.serverUrl + '/products', {responseType: 'text', withCredentials: true}); //aszinkronitas
  }

  updateProduct(product: any) {
    return this.http.put(environment.serverUrl + '/products', product, {responseType: 'text', withCredentials: true}); //aszinkronitas
  }
}
