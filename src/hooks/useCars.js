import axios from "axios";
import { useEffect, useState } from "react";

export const useCars = () => {
  const [cars, setCars] = useState([])
  const [carsType, setCarsType] = useState([])

  useEffect(() => {
    axios.get('https://city-mobil.ru/api/cars')
      .then(({ data }) => {
        let carsTypeObject
        data.tariffs_list.forEach(item => {
          carsTypeObject = {
            ...carsTypeObject,
            [item]: {year: '-'}
          }
        });

        setCars(data.cars.map((car) => {
          return {
            ...car,
            tariffs: {
              ...carsTypeObject,
              ...car.tariffs
            }
          }
        })
        )
        setCarsType(data.tariffs_list)
      })
      .catch(console.log)
  }, [])

  return [cars, carsType]
}