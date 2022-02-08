import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  readonly productsAPIUrl = "https://localhost:7245/api";

  constructor(private http:HttpClient) { }
  
  // Product
  getProductList():Observable<any[]> {
    return this.http.get<any>(this.productsAPIUrl + '/products');
  }

  getProduct(id:number|string) {
    return this.http.get(this.productsAPIUrl + `/products/${id}`);
  }

  addProduct(data:any) {
    return this.http.post(this.productsAPIUrl + '/products', data);
  }

  updateProduct(id:number|string, data:any) {
    return this.http.put(this.productsAPIUrl + `/products/${id}`, data);
  }

  deleteProduct(id:number|string) {
    return this.http.delete(this.productsAPIUrl + `/products/${id}`);
  }

  // Product Types
  getProductTypesList():Observable<any[]> {
    return this.http.get<any>(this.productsAPIUrl + '/productTypes');
  }

  addProductTypes(data:any) {
    return this.http.post(this.productsAPIUrl + '/productTypes', data);
  }

  updateProductTypes(id:number|string, data:any) {
    return this.http.put(this.productsAPIUrl + `/productTypes/${id}`, data);
  }

  deleteProductTypes(id:number|string) {
    return this.http.delete(this.productsAPIUrl + `/productTypes/${id}`);
  }

  // Statuses
  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.productsAPIUrl + '/status');
  }

  addStatus(data:any) {
    return this.http.post(this.productsAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(this.productsAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string) {
    return this.http.delete(this.productsAPIUrl + `/status/${id}`);
  }

  // ProductSalida
  getProductSalidaList():Observable<any[]> {
    return this.http.get<any>(this.productsAPIUrl + '/productSalida');
  }

  getProductSalida(id:number|string) {
    return this.http.get(this.productsAPIUrl + `/productSalida/${id}`);
  }

  addProductSalida(data:any) {
    return this.http.post(this.productsAPIUrl + '/productSalida', data);
  }

  updateProductSalida(id:number|string, data:any) {
    return this.http.put(this.productsAPIUrl + `/productSalida/${id}`, data);
  }

  deleteProductSalida(id:number|string) {
    return this.http.delete(this.productsAPIUrl + `/productSalida/${id}`);
  }
}
