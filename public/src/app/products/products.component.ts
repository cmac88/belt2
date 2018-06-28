import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _http: HttpService) { }
  public products: any;
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    let observable = this._http.getProducts()
    observable.subscribe(data=> {
      console.log(data)
      this.products = data
    })
  }

}
