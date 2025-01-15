import { ExpandedInstance } from '@tanstack/react-table';
import { Cell, CellState } from './cell';
import { Header } from './header';
import { ReactNode } from 'react';

export interface ExcelProps<
  S extends object = object,
  C extends object = object,
  T extends object = object,
> {
  rowHeaders: Header[];
  colHeaders: Header[];
  data: Cell<S, C, T>[][];
  overallHeaderCell: string;
  renderCell: (data: CellState<S, C, T>) => ReactNode;
}

export interface ExcelRef<
  S extends object = object,
  C extends object = object,
  T extends object = object,
> {
  /** 一键展开 */
  handleExpand: ReturnType<
    ExpandedInstance<CellState<S, C, T>[]>['getToggleAllRowsExpandedHandler']
  >;
  /** 检查编辑情况 */
  checkEditState: () => boolean;
  /** 检查编辑情况 */
  handleValidate: () => void;
}

export interface ExcelState<
  S extends object = object,
  C extends object = object,
  T extends object = object,
> {
  rowHeaders: Header[];
  colHeaders: Header[];
  data: CellState<S, C, T>[][];
}
