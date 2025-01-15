import Big from 'big.js';
import { OriginCellValue } from './tool';

export type OriginCell<T extends object = object> = {
  value: OriginCellValue;
  formula: string;
} & T;

export type CellState<
  /** T：原始单元格上的其余参数 */
  T extends object = object,
  /** D：由原始 value 得到的数据类型 */
  D extends object = object,
> = OriginCell<T> & {
  value: D;

  /** 获取用于计算的值 */
  getFactorValue: (...args: any[]) => {
    value: BigOrEmpty;
    factor?: Big.Big;
  };

  /** 获取依赖项 */
  getDeps: () => {
    deps: { RowIndex: number; ColIndex: number; reference: string }[];
    targets: CellState[];
  };

  /** 设置用于计算的值 */
  setFactorValue: (...args: any[]) => void;

  getOriginCell: () => Cell<S, C, T>;

  /**
   * @deprecated 仅为方便验证使用，实际应该直接用闭包里的值
   */
  rowIndex: number;
  /**
   * @deprecated 仅为方便验证使用，实际应该直接用闭包里的值
   */
  colIndex: number;
};
