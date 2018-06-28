import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  pid: any;
  errors: any
  update: any
  constructor(private _http: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.pid = params['id']);
    this.getProduct(this.pid);
  }
  getProduct(id){
    let observable = this._http.grabProduct(id)
    observable.subscribe(data=>{
    this.product = data;
    })
  }
  onSubmit(id){
    console.log(this.product)
    let observable = this._http.editProduct(id, this.product)
    observable.subscribe(data=>{
      if(data['errors']){
        console.log(data['errors'])
        this.errors = []
        for(let e in data['errors']){
          this.errors.push(data['errors'][e])
        } 
      }
      else{
        this._router.navigate(['/'])
      }
    })
}

  reset(){
    this.getProduct(this.pid);
  }

}
