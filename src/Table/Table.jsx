import './Table.css';
import { useTable, useSortBy } from 'react-table'

export const Table = ({ cars, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: cars,
    },
    useSortBy
  )

  return (
    <table {...getTableProps()} className='table'>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr className='row' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className='item header-item' {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ` ∨`
                      : ` ∧`
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr className='row' {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return (
                      <td className='item' {...cell.getCellProps()}>
                        {
                          cell.render('Cell')}
                      </td>
                    )
                  })}
              </tr>
            )
          })}
      </tbody>
    </table >
  )
}