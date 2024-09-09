import React, { useEffect } from 'react';
import { useProductStore } from '../../store/products'; // Importar el store de Zustand

const SortingArea = ({ onSortingSelect }) => {
  const { setSortingOption, sortingOption } = useProductStore();

  const handleChange = (e) => {
    const value = e.target.value;
    sortCourses(value);
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
    setSortingOption({
      valueSort: valueSort,
      columnOrder: columnOrder,
      orderDirection: orderDirection
    }); // Para actualizar la opción seleccionada en Zustand
  }

  useEffect(() => {
    const savedsortingOption = localStorage.getItem('sortingOption');
    if (savedsortingOption) {
      setSortingOption({
        valueSort: savedsortingOption.valueSort,
        columnOrder: savedsortingOption.columnOrder,
        orderDirection: savedsortingOption.orderDirection
      });
    }
  }, []);

  return (
    <div className="edu-sorting-area">
      <div className="sorting-left">
      </div>
      <div className="sorting-right">
        <div className="edu-sorting">
          <div className="icon">
            <i className="icon-55"></i>
          </div>
          <select onChange={handleChange} className="edu-select" value={sortingOption.valueSort}>
            <option>Filtros</option>
            <option>Ordenar de A - Z</option>
            <option>Ordenar de Z - A</option>
            <option>Precio más alto</option>
            <option>Precio más bajo</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SortingArea;