import { useState } from 'react'
import classNames from 'classnames'
import './Filter.css'

export const Filter = ({ cars, setFilteredCars }) => {
  const [value, setValue] = useState('');
  const btnClass = classNames('button find-button', {
    'button-disabled': !value
  })

  const inputHandler = (e) => {
    setValue(e.currentTarget.value)
  }

  const filterCars = (e) => {
    e.preventDefault()
    setFilteredCars(cars.filter(item => (
      item.mark.toLowerCase().indexOf(value.toLowerCase()) + 1
      || item.model.toLowerCase().indexOf(value.toLowerCase()) + 1
    )))
  }

  const clearFilter = () => {
    setFilteredCars(cars)
    setValue('')
  }

  return (
    <form className='filter' onSubmit={filterCars}>
      <input type="text"
        className='input'
        placeholder='Поиск'
        value={value}
        onChange={inputHandler} />
      <button type='submit' className={btnClass} disabled={!value}>Найти</button>
      <button className='button' onClick={clearFilter}>Сбросить</button>
    </form>
  )
}