import React, { useEffect, useMemo, useState } from 'react'
import './Table.css';
import { nanoid } from 'nanoid'
import { useTable, useSortBy } from 'react-table'

export const Table = ({ cars, carsType }) => {
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Марка и модель',
  //       accessor: 'MarkModel',
  //     },
  //     ...carsType.map((item) => (
  //       {
  //         Header: item,
  //         accessor: item,
  //       }
  //     ))
  //   ]
  // )

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = useTable(
  //   {
  //     columns,
  //     cars,
  //   },
  //   useSortBy
  // )

  

  const [sortedCars, setSortedCars] = useState(cars)

  useEffect(() => {
    setSortedCars(cars)
  }, [cars])

  const headerHandler = (e) => {
    if (e.target.textContent === 'Марка и модель') {
      setSortedCars([...cars.sort((a, b) => {
        if (`${a.mark} ${a.model}` > `${b.mark} ${b.model}`) {
          return 1
        }
        if (`${a.mark} ${a.model}` < `${b.mark} ${b.model}`) {
          return -1
        }
        return 0;
      })])
    } else {
      carsType.forEach((item) => {
        if (item === e.target.textContent) {
          setSortedCars([...cars.sort((a, b) => {
            if (`'${a.tariffs[item].year}'` < `'${b.tariffs[item].year}'`) {
              return 1
            }
            if (`'${a.tariffs[item].year}'` > `'${b.tariffs[item].year}'`) {
              return -1
            }
            return 0;
          })])
        }
      })
    }
  }


  return (
    <table className="table">
      <thead>
        <tr className='row' onClick={headerHandler}>
          <th className='item header-item first'>Марка и модель</th>
          {
            carsType.map((item, index) => (
              <th className='item header-item' key={nanoid()}>{item}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          sortedCars.map((car, index) => {
            return (
              <tr className='row' key={nanoid()}>
                <td className='item first'>{`${car.mark} ${car.model}`}</td>
                {
                  Object.values(car.tariffs).map((item, index) => {
                    return <td className='item' key={nanoid()}>{item.year}</td>
                  })
                }
              </tr>
            )
          })
        }
        <tr>
        </tr>
      </tbody>

    </table>
  )
}