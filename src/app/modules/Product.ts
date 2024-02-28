import {Category} from "./Category";

export class Product {

  private _productTitle! : string;
  private _productPrice! : number;
  private _productImage! : string;
  private _productQuantity! : number;
  private _productDescription! : string;
  private _category! : Category
  private _Date! : Date;


  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  constructor(readonly productID : string) {
  }

  get productTitle(): string {
    return this._productTitle;
  }

  set productTitle(value: string) {
    this._productTitle = value;
  }

  get productPrice(): number {
    return this._productPrice;
  }

  set productPrice(value: number) {
    this._productPrice = value;
  }

  get productImage(): string {
    return this._productImage;
  }

  set productImage(value: string) {
    this._productImage = value;
  }

  get productQuantity(): number {
    return this._productQuantity;
  }

  set productQuantity(value: number) {
    this._productQuantity = value;
  }

  get productDescription(): string {
    return this._productDescription;
  }

  set productDescription(value: string) {
    this._productDescription = value;
  }

  get Date(): Date {
    return this._Date;
  }

  set Date(value: Date) {
    this._Date = value;
  }

  public getImageURL() : string{
    return "/assets/images/"+this.productImage;
  }
}
