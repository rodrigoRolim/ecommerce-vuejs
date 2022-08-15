export type ProductId = number;
export type Image = string;
export type Title = string;
export type Price = number;

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: ProductId;
  title: Title;
  price: Price;
  description: string;
  category: string;
  image: Image;
  rating: Rating;
}
