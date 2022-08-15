import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Product } from "../entites/Product";
import { iProductRemoteRepository } from "../repositories/ProductRemoteRepository";

export class ListProductsUseCase {
  private productRemoteRepository: iProductRemoteRepository;

  constructor(productRemoteRepository: iProductRemoteRepository) {
    this.productRemoteRepository = productRemoteRepository;
  }

  execute(): Promise<Either<DataError, Product[]>> {
    return this.productRemoteRepository.listAllProducts()
  }
}
