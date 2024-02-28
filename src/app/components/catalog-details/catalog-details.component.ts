import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {NgIf} from "@angular/common";
import {Product} from "../../modules/Product";

@Component({
  selector: 'app-catalog-details',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './catalog-details.component.html',
  styleUrl: './catalog-details.component.css'
})
export class CatalogDetailsComponent implements OnInit{

  @Input() product! : Product;

  @Output() visibility = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
}
