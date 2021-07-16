import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Filter } from './Filter';
import { useCars } from './hooks/useCars';
import { Table } from './Table';

function App() {
  const [cars, carstype] = useCars()

  //Формирование столбцов таблицы
  const columns = useMemo(
    () => [
      {
        Header: 'Марка и модель',
        accessor: originalRow => `${originalRow.mark} ${originalRow.model}`,
      },
      ...carstype.map((item) => (
        {
          Header: item,
          accessor: originalRow => originalRow.tariffs[item].year,
        }
      ))
    ]
  )

  //Массив отфильтрованных машин
  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
    //Записываем наши машины в отфильтрованные, чтобы в дальнейшем можно было менять фильтр
    setFilteredCars(cars)
  }, [cars])

  if (!cars) return null

  return (
    <div className="App">
      <header className='header'>
        header
      </header>
      <main className='main'>
        <div className='sidebar'>sidebar</div>
        <div className='block'>
          <Filter cars={cars} setFilteredCars={setFilteredCars}/>
          <Table cars={filteredCars} columns={columns} />
        </div>
      </main>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
