import { Props as TableProps } from './table'

declare global {
  interface Window {
    DemoTableProps: TableProps
  }
}
