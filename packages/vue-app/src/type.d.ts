export type iCurrencyCode = "USD" | "EUR" | "BRL";
export type iCurrencySymbol = "$" | "€" | "R$";
export type iColor = "primary" | "danger" | "warning" | "default";
export type iSize = "small" | "medium" | "large";

export type FixedLengthArray<T extends any[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator< ArrayItems<T> > }