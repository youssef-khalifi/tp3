import { Injectable } from '@angular/core';
import { Product } from '../modules/Product';
import { Category } from '../modules/Category';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {


  constructor() { }

  public getProducts() : Array<Product>{
    // @ts-ignore
   let  products : Array<Product>  = new Array<Product>();

    let p1 : Product = new Product("1");
    p1.productTitle = "Iphone 14";
    p1.productPrice = 10250;
    p1.productQuantity = 250;
    p1.productImage = "iphone14.png";
    p1.productDescription = "Iphone 14 ...";
    p1.Date = new Date(Date.now());
    p1.category = Category.Electronics;

    let p2 : Product = new Product("2");
    p2.productTitle = "Cable USB";
    p2.productPrice = 30;
    p2.productQuantity = 50;
    p2.productImage = "cableusb.jpg";
    p2.productDescription = "Cable USB ...";
    p2.Date = new Date(Date.now());
    p2.category = Category.Electronics;

    let p3 : Product = new Product("3");
    p3.productTitle = "Clavier";
    p3.productPrice = 200;
    p3.productQuantity = 4;
    p3.productImage = "clavier.jpg";
    p3.productDescription = "Clavier HP ...";
    p3.Date = new Date(Date.now());
    p3.category = Category.Electronics;

    let p4 : Product = new Product("4");
    p4.productTitle = "Hoodie";
    p4.productPrice = 400;
    p4.productQuantity = 20;
    p4.productImage = "hoodie.jpg";
    p4.productDescription = "Hoodie from zara XXL...";
    p4.Date = new Date(Date.now());
    p4.category = Category.Fashion;

    products.push(p1);
    products.push(p2);
    products.push(p3);
    products.push(p4);


    return products;
  }
}
