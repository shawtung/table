import { useState, useMemo, useCallback, useEffect } from 'react'

export const useSorter = () => {
  const [sorter, setSorter] = useState(0)

  const onSorterChange = useCallback((index: number) => {
    setSorter((prev) => {
      // reset to default
      if (prev === index) return 0
      else return index
    })
  }, [])

  return [sorter, onSorterChange] as const
}

export const PageSizeList = [2, 3, 4, 5, Infinity] as const

export const usePagination = (dataSourceLength: number) => {
  const [oPageSize, setPageSize] = useState<(typeof PageSizeList)[number]>(
    PageSizeList[0]
  )
  /** start from 1 */
  const [pageNumber, setPageNumber] = useState(1)

  const pageSize = useMemo(
    () => (oPageSize === Infinity ? dataSourceLength : oPageSize),
    [oPageSize, dataSourceLength]
  )

  const total = useMemo(
    () => Math.ceil(dataSourceLength / pageSize),
    [pageSize, dataSourceLength]
  )

  const onPageNumberChange = useCallback(
    (page: number) => {
      if (page <= 1) setPageNumber(1)
      else if (page >= total) setPageNumber(total)
      else setPageNumber(page)
    },
    [total]
  )

  const onPageNumberIncrease = useCallback(() => {
    setPageNumber((prev) => (prev >= total ? total : prev + 1))
  }, [total])

  const onPageNumberDecrease = useCallback(() => {
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1))
  }, [])

  useEffect(() => {
    if (pageNumber > total) {
      setPageNumber(total)
    }
  }, [pageNumber, total])

  return {
    pageSize: oPageSize,
    pageNumber,
    total,
    onPageSizeChange: setPageSize,
    onPageNumberChange,
    onPageNumberIncrease,
    onPageNumberDecrease,
  }
}
