import React, { useEffect, useState } from 'react';
import { useProductStore } from '../../store/products'; // Importar el store de Zustand

const SortingArea = ({ onSortingSelect }) => {
  const { setSortingOption, sortingOption } = useProductStore();

  const [valueSort, setValueSort] = useState('Filtros')

  const handleChange = (e) => {
    const value = e.target.value;
    sortCourses(value);
    setValueSort(value);
  };

  const sortCourses = (value) => {
    let valueSort = '';
    let columnOrder = '';
    let orderDirection = '';

    if (value === 'Ordenar de A - Z') {
      valueSort=value;
      columnOrder = 'Name';
      orderDirection = 'ASC';
    } else if (value === 'Ordenar de Z - A') {
      valueSort=value;
      columnOrder = 'Name';
      orderDirection = 'DESC';
    } else if (value === 'Precio más bajo') {
      valueSort=value;
      columnOrder = 'Price';
      orderDirection = 'ASC';
    } else if (value === 'Precio más alto') {
      valueSort=value;
      columnOrder = 'Price';
      orderDirection = 'DESC';
    } else {
      valueSort='Filtros';
      columnOrder = '';
      orderDirection = '';
    }
    onSortingSelect({ valueSort, columnOrder, orderDirection });
    // Actualización del estado en Zustand
    setSortingOption({
      valueSort: valueSort,
      columnOrder: columnOrder,
      orderDirection: orderDirection
    });
  }

  useEffect(() => {
    console.log(sortingOption);
    const savedsortingOption = localStorage.getItem('sortingOption');
    console.log(savedsortingOption);
    if (savedsortingOption) {
      // Parsear el JSON almacenado
      const parsedOption = JSON.parse(savedsortingOption);
      setSortingOption({
        valueSort: parsedOption.valueSort,
        columnOrder: parsedOption.columnOrder,
        orderDirection: parsedOption.orderDirection
      });
      setValueSort(parsedOption.valueSort);
    }
  }, [setSortingOption, valueSort]);
  return (
    <div className="edu-sorting-area">
      <div className="sorting-left">
      </div>
      <div className="sorting-right">
        <div className="edu-sorting">
          <div className="icon">
            <i className="icon-55"></i>
          </div>
          <select onChange={handleChange} className="edu-select" value={valueSort}>
            <option value="Filtros">Filtros</option>
            <option value="Ordenar de A - Z">Ordenar de A - Z</option>
            <option value="Ordenar de Z - A">Ordenar de Z - A</option>
            <option value="Precio más alto">Precio más alto</option>
            <option value="Precio más bajo">Precio más bajo</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SortingArea;