import React, { useMemo, useCallback } from 'react'
import { useSorter, usePagination, PageSizeList } from './hooks'
import './index.css'

export interface Props {
  columns: string[]
  dataSource: (string | number)[][]
  /** positive value represents left and negative right */
  freeze?: number
}

export const Table: React.FC<Props> = (props) => {
  const { freeze = 0, columns, dataSource } = props
  const [sorter, onSorterChange] = useSorter()

  const {
    pageSize,
    pageNumber,
    total,
    onPageNumberChange,
    onPageSizeChange,
    onPageNumberDecrease,
    onPageNumberIncrease,
  } = usePagination(dataSource.length)

  const paginatedDataSource = useMemo(
    () => dataSource.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
    [dataSource, pageNumber, pageSize]
  )

  const sortedDataSource = useMemo(() => {
    if (sorter === 0) return paginatedDataSource

    return paginatedDataSource.slice().sort(
      (a, b) =>
        // for string comparison
        (a[Math.abs(sorter) - 1] < b[Math.abs(sorter) - 1] ? 1 : -1) *
        Math.sign(sorter)
    )
  }, [paginatedDataSource, sorter])

  const calcStickyLeftRight = useCallback(
    (index: number) => {
      if (freeze > 0) {
        if (index < freeze) {
          return { left: index * 150 }
        }
      } else if (freeze < 0) {
        const rightIndex = columns.length - index - 1
        if (rightIndex < -freeze) {
          return { right: rightIndex * 150 }
        }
      }
    },
    [columns.length, freeze]
  )

  return (
    <div className='table-wrapper'>
      <div className='sticky-table'>
        <table>
          <thead>
            <tr>
              {columns.map((v, i) => (
                <th
                  key={i}
                  style={calcStickyLeftRight(i)}
                  className={calcStickyLeftRight(i) ? 'row-sticky' : ''}
                >
                  <div className='th-wrapper'>
                    {v}
                    &nbsp;&nbsp;
                    <span className='sorter-wrapper'>
                      <span
                        className={sorter === -i - 1 ? 'active' : ''}
                        onClick={() => onSorterChange(-i - 1)}
                      >
                        &lt;
                      </span>
                      <span
                        className={sorter === i + 1 ? 'active' : ''}
                        onClick={() => onSorterChange(i + 1)}
                      >
                        &gt;
                      </span>
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedDataSource.map((row, i) => (
              <tr key={i}>
                {row.map((v, j) => (
                  <td
                    key={j}
                    style={calcStickyLeftRight(j)}
                    className={calcStickyLeftRight(j) ? 'row-sticky' : ''}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        <span
          className={`clickable ${pageNumber <= 1 && 'disabled'}`}
          onClick={onPageNumberDecrease}
        >
          &lt;
        </span>
        &nbsp;
        <span>
          <input
            type='number'
            value={pageNumber}
            onChange={(e) => onPageNumberChange((e.target as any).value)}
          />
          &nbsp;/&nbsp;
          {total}
        </span>
        &nbsp;
        <span
          className={`clickable ${pageNumber >= total && 'disabled'}`}
          onClick={onPageNumberIncrease}
        >
          &gt;
        </span>
        &nbsp;&nbsp;
        <select
          value={pageSize}
          onChange={(e) =>
            onPageSizeChange(
              Number(e.target.value) as (typeof PageSizeList)[number]
            )
          }
        >
          {PageSizeList.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
        &nbsp;items per page
      </div>
    </div>
  )
}
