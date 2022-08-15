import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Cart } from "../domain/entities/Cart";
import { iCartLocalRepository } from "../domain/repositories/CartLocalRepository";

export class CartLocalRepository implements iCartLocalRepository  {

  get(): Promise<Either<DataError, Cart>> {
    
  }
}