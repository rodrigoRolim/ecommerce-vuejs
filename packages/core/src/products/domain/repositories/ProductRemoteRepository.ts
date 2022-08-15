import { Api } from "@ecommerce/infra";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Product } from "../entites/Product";

export interface iProductRemoteRepository {
  readonly api: Api;
  listAllProducts(): Promise<Either<DataError, Product[]>>;
}
