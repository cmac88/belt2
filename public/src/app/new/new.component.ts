import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;
  product:any;
  constructor(private _http: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

    this.product = { name : '', qty: '', price: ''}
  }
  onSubmit(){
    console.log(this.product)
    let observable = this._http.addProduct(this.product)
    observable.subscribe(data=>{
      if(data['errors']){
        this.errors = []
        for(let e in data['errors']){
          this.errors.push(data['errors'][e])
        } 
        console.log(this.errors)
      }
      else{
        this._router.navigate(['/'])
      }
    })
  }
  reset(){
    this.product = { name : '', qty: '', price: ''}
  }

}
