import { useCallback, useState } from 'react'
import { Table } from './table'
import './App.css'

window.DemoTableProps = {
  columns: ['name', 'score1', 'score2', 'score3', 'score4', 'score5', 'score6'],
  dataSource: [
    ['A1', 3, 4, 3, 4, 3, 4],
    ['B1', 5, 3, 5, 3, 5, 3],
    ['C1', 1, 5, 1, 5, 1, 5],
    ['D1', 4, 2, 4, 2, 4, 2],
    ['E1', 2, 1, 2, 1, 2, 1],
    ['F1', 4, 2, 4, 2, 4, 2],
    ['G1', 2, 1, 2, 1, 2, 1],
    ['H1', 4, 2, 4, 2, 4, 2],
    ['I1', 2, 1, 2, 1, 2, 1],
    ['A2', 3, 4, 3, 4, 3, 4],
    ['B2', 5, 3, 5, 3, 5, 3],
    ['C2', 1, 5, 1, 5, 1, 5],
    ['D2', 4, 2, 4, 2, 4, 2],
    ['E2', 2, 1, 2, 1, 2, 1],
    ['F2', 4, 2, 4, 2, 4, 2],
    ['G2', 2, 1, 2, 1, 2, 1],
    ['H2', 4, 2, 4, 2, 4, 2],
    ['I2', 2, 1, 2, 1, 2, 1],
  ],
  freeze: -2,
}

function App() {
  const forceUpdate = useForceUpdate()

  return (
    <div className='demo-wrapper'>
      <p>
        Modify <code>window.DemoTableProps</code> in console and click{' '}
        <code>refresh</code>.&nbsp;
        <button onClick={forceUpdate}>refresh</button>
      </p>
      <Table {...window.DemoTableProps} />
    </div>
  )
}

export default App

const useForceUpdate = () => {
  const [, setState] = useState(false)
  return useCallback(() => setState((p) => !p), [])
}
