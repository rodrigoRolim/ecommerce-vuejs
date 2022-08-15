import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { ListProductsUseCase } from "../domain/usecases/ListProductsUseCase";
import { mapErroToState, productsIntialState, ProductsState } from "./ProductsState";

export class ProductsPloc extends Ploc<ProductsState> {

  constructor(private listProductsUseCase: ListProductsUseCase) {
    super(productsIntialState);
  }

  async search() {
    const productsResult = await this.listProductsUseCase.execute();

    productsResult.fold(
      error => this.changeState(this.handleError(error)),
      products => this.changeState({
        kind: "LoadedProductsState",
        products,
        searchTerms: ""
      })
    );
  }

  private handleError(error: DataError): ProductsState {
    return mapErroToState[error.kind];
  }
}