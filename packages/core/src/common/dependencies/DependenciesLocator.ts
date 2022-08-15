import { Api } from "@ecommerce/infra";
import { ProductRemoteRepository } from "../../products/data/ProductRemoteRepository";
import { ListProductsUseCase } from "../../products/domain/usecases/ListProductsUseCase";
import { ProductsPloc } from "../../products/presentation/ProductsPloc";

const api = new Api();

function provideProductsPloc(): ProductsPloc {
  
  const productRemoteRepository = new ProductRemoteRepository(api);
  const listProductsUseCase = new ListProductsUseCase(productRemoteRepository);
  const productsPloc = new ProductsPloc(listProductsUseCase);

  return productsPloc;
}

export const dependencies = {
  provideProductsPloc
}