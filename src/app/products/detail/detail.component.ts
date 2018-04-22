import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductsService]
})
export class DetailComponent implements OnInit {
  len : any;
  temp:any;
  constructor(private _activeRoute : ActivatedRoute, private _router : Router, private _productService : ProductsService) {   }

  ngOnInit() {
    this._activeRoute.params.subscribe((data)=> {
      console.log(data.pId)
     this.len =  this._productService.getProducts();
    for(let i=0;i<this.len.length;i++){
      if(data.pId==this.len[i].productCode){
        this.temp=this.len[i];
      }
    }
    });
  }

  gotoproducts(){
    
    this._router.navigate(['/products']);

  }

}
