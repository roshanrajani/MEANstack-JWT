import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle : string = "Products - list";

   products: any = []; 

  showHideImg : boolean = true;

  constructor(private _productService:ProductsService) {
    
   }

  ngOnInit() {
    console.log('Prodicst component loaded');
    
    this.products = this._productService.getProducts().subscribe((data=>{
      this.products = data;
    }));
    
    }

  ngOnDestroy(){

  }

  toggleImage(){
    this.showHideImg = !this.showHideImg;
  }
  ratingEventFn(data:string){
    this.pageTitle = data;
    
  }

}
