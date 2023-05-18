import { Table } from './table'

const DemoTableData = {
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
}

function App() {
  return (
    <div>
      <Table {...DemoTableData} freeze={-3} />
    </div>
  )
}

export default App
