/** 配列の途中に値を挿入する */
export function insertValueInBetween<T>(arr: T[], position: number, insertValue: T): T[] {
  return [...arr.slice(0, position), insertValue, ...arr.slice(position)];
}

/**
 * 指定されたIndexの位置を1つ大きい側に移動する
 */
export function swapUp<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index < 0 || index > array.length - 2) {
    return _;
  } else {
    _.splice(index, 2, _[index + 1], _[index]);
    return _;
  }
}

/**
 * 指定されたIndexを１つ小さい側に移動する
 */
export function swapDown<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index <= 0 || index > array.length - 1) {
    return _;
  } else {
    _.splice(index - 1, 2, _[index], _[index - 1]);
    return _;
  }
}

/**
 * ランダムなHash値を取得する
 */
export function createHashKey(): string {
  const digit = 100000000000;
  const randNums = [
    new Date().getTime(),
    Math.round(Math.random() * digit) + digit,
    Math.round(Math.random() * digit) + digit,
  ];
  let hash_key = "";
  randNums.forEach((byte) => (hash_key += byte < 0 ? (byte += 256).toString(16) : byte.toString(16)));
  return hash_key;
}

export const isUndefined = <T>(v: T | undefined): v is undefined => {
  return v === undefined;
};

export const isNull = <T>(v: T | null): v is null => {
  return v === null;
};

export const isNotUndefinedAndNull = <T>(v: T | undefined | null): v is T => {
  return v !== undefined && v !== null;
};

export const switchUndefined = <T, U>(v: T | undefined, isValue: U, isNotValue: U): U => {
  if (isUndefined(v)) {
    return isValue;
  } else {
    return isNotValue;
  }
};

export const switchNull = <T, U>(v: T | null, isValue: U, isNotValue: U): U => {
  if (isNull(v)) {
    return isValue;
  } else {
    return isNotValue;
  }
};

export const isUndefinedOrNullError = <T>(v: T | undefined | null, error: Error): T => {
  if (isNotUndefinedAndNull(v)) {
    return v;
  } else {
    throw error;
  }
};

class SystemError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SystemError";
  }
}

/** format system error */
export const systemError = (message: string, ...method: string[]): Error => {
  return new SystemError(`${message} (${method.join(".")})`);
};
