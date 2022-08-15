import { iProductRemoteRepository } from "../domain/repositories/ProductRemoteRepository";
import { Api } from "@ecommerce/infra";
import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Product } from "../domain/entites/Product";

export class ProductRemoteRepository implements iProductRemoteRepository { 
  
  readonly api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async listAllProducts(): Promise<Either<DataError, Product[]>> {
    try {
      const result = await this.api.get<Product[]>("products");
      return Promise.resolve(Either.right(result.data));
    } catch(error: any) {
      return Promise.resolve(Either.left({ kind: "UnexpectedError", message: error }));
    }
  }
}
