import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { Cart } from "../entities/Cart";

export interface iCartLocalRepository {
  listCartFromLocalData(): Promise<Either<DataError, Cart>>;
  saveCartInToLocaData(): Promise<Either<DataError, boolean>>;
}
