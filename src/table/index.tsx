import React from 'react'

interface Props {
  columns: string[];
  dataSource: any[][];
}

export const Table: React.FC<Props> = (props) => {
  const { columns, dataSource } = props

  return (
    <table>
      <thead>
        <tr>
          {columns.map((v, i) => <th key={i}>{v}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((row, i) => (
          <tr key={i}>
            {row.map((v, j) => <td key={j}>{v}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
