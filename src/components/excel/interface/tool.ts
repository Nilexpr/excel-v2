/** 可递归的 */
export interface Recursively<T> {
  main: T;
  children?: Recursively<T>[];
}

/** 原表格数据 */
export type OriginCellValue = number | string | null;
