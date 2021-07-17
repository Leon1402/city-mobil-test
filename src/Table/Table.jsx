import './Table.css';
import { useTable, useSortBy } from 'react-table'

export const Table = ({ cars, columns, setSelectCar }) => {
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

  const selectCar = (e) => {
    if (!isNaN(e.target.textContent)) {
      const model = e.target.parentNode.firstChild.textContent;
      const year =  e.target.textContent;
      setSelectCar({model, year})
    }
    // setSelectCar()
  }

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

      <tbody {...getTableBodyProps()} onClick={selectCar}>
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