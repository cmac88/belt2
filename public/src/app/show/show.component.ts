import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
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
  delete(id){
    let observable = this._http.deleteProduct(id)
    observable.subscribe(data=>{
      console.log(data)
      this._router.navigate(['/'])
    })
  }
}
