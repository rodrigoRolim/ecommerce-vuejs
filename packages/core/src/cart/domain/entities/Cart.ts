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
    const existItem = this.cartItems.find(item => item.id === item.id)
    
    if(existItem) {

      const newItems = this.cartItems.map(oldItem => {
        if (oldItem.id === item.id) {
            return { ...oldItem, quantity: oldItem.quantity + item.quantity };
        } else {
            return oldItem;
        }
      });

      return new Cart(newItems);
    } else {
      const newItems = [...this.cartItems, item];

      return new Cart(newItems);
    }
  }

  removeCartItem(itemId: number): Cart {
    const newItems = this.cartItems.filter(i => i.id !== itemId);

    return new Cart(newItems);
  }

  editCartItem(itemId: number, quantity: number): Cart {
    const newItems = this.cartItems.map(oldItem => {
      if (oldItem.id === itemId) {
          return { ...oldItem, quantity: quantity };
      } else {
          return oldItem;
      }
    });

    return new Cart(newItems);
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
