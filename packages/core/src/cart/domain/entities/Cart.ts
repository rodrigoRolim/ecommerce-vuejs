import { CartItem } from "./CartItem";

type Amount = number;
type ItemsTotal = number;

export class Cart {
  cartItems: readonly CartItem[];
  readonly amount: Amount;
  readonly itemsTotal: ItemsTotal;

  constructor(cartItems: CartItem[]) {
    this.cartItems = cartItems;
    this.amount = this.calculateAmount(cartItems);
    this.itemsTotal = this.calculateTotalOfItems(cartItems);
  }

  static createEmptyCart(): Cart {
    return new Cart([]);
  }

  addCartItem(item: CartItem): Cart {

    
  }

  removeCartItem(item: CartItem): Cart {

  }

  private calculateAmount(cartItems: CartItem[]): Amount {
    return +cartItems.
      reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
      .toFixed(2);
  }

  private calculateTotalOfItems(cartItems: CartItem[]): ItemsTotal {
    return +cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }
}