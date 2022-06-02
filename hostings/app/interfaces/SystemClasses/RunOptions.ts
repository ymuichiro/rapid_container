export default interface AbstractRunOptions {
  readonly categoryId: string;
  readonly categoryName: string;
  readonly categoryDescription: string;
  readonly cardCategoryIcon: string;
  readonly methodId: string;
  readonly methodName: string;
  readonly methodDescription: string;
  readonly frequency1Argument: RegExp | undefined;
  readonly frequenct1ArgumentDescription: string | undefined;
  readonly frequency2Argument: RegExp | undefined;
  readonly frequenct2ArgumentDescription: string | undefined;
}
