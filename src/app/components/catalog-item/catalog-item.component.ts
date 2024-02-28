import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../modules/Product";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.css'
})
export class CatalogItemComponent implements OnInit{

  @Input() product! : Product;

  ngOnInit(): void {
  }

  public delete(){
    alert("working on it")
  }

  public like(){
    alert("working on it")
  }

  public showDetails(product : Product){

    this.product = product;
  }
}
