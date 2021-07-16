import { useEffect, useState } from 'react';
import './App.css';
import { Filter } from './Filter';
import { useCars } from './hooks/useCars';
import { Table } from './Table';

function App() {
  const [cars, carstype] = useCars()

  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
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
          <Table cars={filteredCars} carsType={carstype} />
        </div>
      </main>
      <footer className='footer'>Footer</footer>
    </div>
  );
}

export default App;
