import React from 'react'

import { Table } from './table'


const DemoTableData = {
  columns: ['name', 'score1', 'score2'],
  dataSource: [
    ['A', 3, 4],
    ['B', 5, 3],
    ['C', 1, 5],
    ['D', 4, 2],
    ['E', 2, 1],
  ]
}

function App() {
  return (
    <div>
      <Table {...DemoTableData} />
    </div>
  );
}

export default App;
