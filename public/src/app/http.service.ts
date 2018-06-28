import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getProducts();
  }
  addProduct(newProduct){
    return this._http.post('/api/products', newProduct)
  }
  
  getProducts(){
    return this._http.get('/api/products');
  }
  grabProduct(id){
    return this._http.get('/api/products/'+id)
  }
  
  editProduct(id, editOf){
    console.log(editOf)
    return this._http.put('/api/products/'+id, editOf)
  }
  
  deleteProduct(id){
    return this._http.delete('/api/products/'+id)
  }
  like(id){
    return this._http.put('/api/products/like/' + id, 1)
  }
}
