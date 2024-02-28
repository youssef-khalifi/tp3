import {Component, OnInit, Output} from '@angular/core';
import { Product } from '../../modules/Product';
import { CatalogService } from '../../services/catalog.service';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {CatalogDetailsComponent} from "../catalog-details/catalog-details.component";
import {elementAt} from "rxjs";
import {FormsModule} from "@angular/forms";
import {CatalogItemComponent} from "../catalog-item/catalog-item.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CatalogDetailsComponent,
    NgClass,
    NgStyle,
    FormsModule,
    CatalogItemComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  visible : boolean = false;
  products! : Product[];
  productList! : Product[] ;
  @Output() product! : Product;
  windowScrolled = false;

  ngOnInit(): void {
    this.getProducts();

  }
  constructor(private service : CatalogService) {
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  public getProducts(){
    this.products = this.service.getProducts();
  }
  public getProductsByCategory(category : string){
     let ps = this.service.getProducts();
      this.productList = ps.filter(value => value.category === category);
    console.log(this.productList)
    if (this.productList != undefined){
      this.products = this.productList
    }

  }

  public showDetails(product : Product){
    this.visible = !this.visible;
    this.product = product;
    this.scrollToTop()
  }


  public delete(){
    alert("working on it")
  }

  public like(){
    alert("working on it")
  }
}
