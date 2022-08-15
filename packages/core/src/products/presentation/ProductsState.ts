import { Product } from "../domain/entites/Product";

export interface CommonProductState {
  searchTerms: string;
}

export interface LoadingProductsState {
  kind: "LoadingProductsState";
}

export interface LoadedProductsState { 
  kind: "LoadedProductsState";
  products: Array<Product>;
}

export interface ErrorProductsState { 
  kind: "ErrorProductsState";
  error: string;
}

export type ProductsState = (LoadingProductsState | ErrorProductsState | LoadedProductsState) & CommonProductState;

export const productsIntialState: ProductsState = {
  kind: "LoadingProductsState",
  searchTerms: ""
}

export const mapErroToState: { [key: string]: ProductsState} = {
  "UnexpectedError": {
    kind: "ErrorProductsState",
    error: "Something went wrong",
    searchTerms: ""
  }
}