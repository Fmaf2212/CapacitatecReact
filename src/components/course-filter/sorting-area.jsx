import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_force_page, add_item_offset } from '../../redux/features/filter-slice';

const SortingArea = ({course_items, num, setCourses, courses,course_list, items }) => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('Filtros'); // Estado local para controlar la opción seleccionada

    // Función para manejar el cambio de orden
    const handleChange = (e) => {
        const value = e.target.value;
        localStorage.setItem('sortingOption', value); // Guardar la opción de ordenamiento en localStorage
        sortCourses(value);
    };

    const sortCourses = (value) => {
        console.log(value)
        // const value = e.target.value;
        let sortedCourses = [...courses];

        if (value === 'Ordenar de A - Z') {
            sortedCourses.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === 'Ordenar de Z - A') {
            sortedCourses.sort((a, b) => b.name.localeCompare(a.name));
        } else if (value === 'Precio más bajo') {
            sortedCourses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (value === 'Precio más alto') {
            sortedCourses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else {
            sortedCourses = course_items;
        }
        setCourses(sortedCourses);
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    }

    // Recuperar la opción de ordenamiento al montar el componente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedOption = localStorage.getItem('sortingOption');
            if (savedOption) {
                setSelectedOption(savedOption); // Actualizar el estado con la opción guardada
                sortCourses(savedOption);
            }
        }
    }, []);

    return (
        <div className="edu-sorting-area">
            <div className="sorting-left">
            </div>
            <div className="sorting-right">
                <div className="edu-sorting">
                    <div className="icon"><i className="icon-55"></i></div>
                    <select onChange={handleChange} className="edu-select"  value={selectedOption}>
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