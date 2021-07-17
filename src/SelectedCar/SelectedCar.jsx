import './SelectedCar.css';

export const SelectedCar = ({ selectCar }) => {
  if (!selectCar) return null

  return <div className='selected-car'>Выбран автомобиль {selectCar.model} {selectCar.year} года выпуска</div>
}