import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_TOKEN } from '../../../data/bearerToken';

const CourseSidebarTwo = ({onTeacherSelect, onCategorySelect}) => {
  const [showCategory, setShowCategory] = useState(true);
  const [categoriesFromService, setCategoriesFromService] = useState([]);
  const [showTeachers, setShowTeachers] = useState(true);
  const [teachersFromService, setTeachersFromService] = useState([]);

  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleTeacherChange = (teacherId) => {
    const updatedSelection = selectedTeachers.includes(teacherId) // Verifica si el teacherId ya está dentro del array selectedTeachers
      ? selectedTeachers.filter(id_selectedTeachers => id_selectedTeachers !== teacherId) // Si ya está seleccionado, lo quitas
      : [...selectedTeachers, teacherId]; // Si no está seleccionado, lo agregas

    localStorage.setItem('selectedTeachers', updatedSelection);

    setSelectedTeachers(updatedSelection); // Actualiza el estado local
    onTeacherSelect(updatedSelection); // Envía el estado actualizado al padre
  };

  const handleCategoriesChange = (categoryId) => {
    const updatedSelection = selectedCategories.includes(categoryId) // Verifica si el categoryId ya está dentro del array selectedCategories
      ? selectedCategories.filter(id_selectedCategories => id_selectedCategories !== categoryId) // Si ya está seleccionado, lo quitas
      : [...selectedCategories, categoryId]; // Si no está seleccionado, lo agregas

    localStorage.setItem('selectedCategories', updatedSelection);

    setSelectedCategories(updatedSelection); // Actualiza el estado local
    onCategorySelect(updatedSelection); // Envía el estado actualizado al padre
  };

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post('https://apitest.yosoymitosis.com/v1/Category/GetCategoryFilter', {}, {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        if (response.data.error === false) {
          setCategoriesFromService(response.data.data);
        } else {
          console.error('Error fetching categories');
        }
      } catch (error) {
        console.error('Error during API request', error);
      }
    };

    fetchCategories();

    const fetchTeachers = async () => {
      try {
        const response = await axios.post('https://apitest.yosoymitosis.com/v1/Teacher/GetTeacherFilter',{},
          {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        if (response.data.error === false) {
          setTeachersFromService(response.data.data);
        } else {
          console.error('Error fetching teachers');
        }
      } catch (error) {
        console.error('Error during API request', error);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    const savedTeachers = localStorage.getItem('selectedTeachers');
    if (savedTeachers) {
      setSelectedTeachers(JSON.parse(savedTeachers)); // Establece los IDs recuperados en el estado
    }
    const savedCategories = localStorage.getItem('selectedCategories');
    if (savedCategories) {
      setSelectedCategories(JSON.parse(savedCategories)); // Establece los IDs recuperados en el estado
    }
  }, []); // Solo se ejecuta una vez cuando la página se carga

  return (
    <div className="course-sidebar-2">
      <div className="edu-course-widget widget-category">
        <div className="inner">
          <h5 className={`widget-title widget-toggle ${showCategory ? 'active' : ''}`} onClick={() => setShowCategory(!showCategory)}>Categorías</h5>

          <div className="content" style={{ display: showCategory ? 'block' : 'none' }}>
            {categoriesFromService.map((category, i) => (
              <div key={category.categoryId} className="edu-form-check" >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.categoryId)} // Verifica si el teacherId está seleccionado
                  id={`cat-check${i + 1}`}
                  onChange={() => handleCategoriesChange(category.categoryId)}
                />
                <label htmlFor={`cat-check${i + 1}`}>{category.description}
                  <span>({categoriesFromService.filter(item => item.category === category.description)?.length})</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="edu-course-widget widget-category">
        <div className="inner">
          <h5 className={`widget-title widget-toggle ${showTeachers ? 'active' : ''}`} onClick={() => setShowTeachers(!showTeachers)}>Profesores</h5>

          <div className="content" style={{ display: showTeachers ? 'block' : 'none' }}>
            {teachersFromService.map((teacher, i) => (
              <div key={teacher.teacherId} className="edu-form-check" >
                <input
                  type="checkbox"
                  checked={selectedTeachers.includes(teacher.teacherId)} // Verifica si el teacherId está seleccionado
                  id={`teacher-check${i + 1}`}
                  onChange={() => handleTeacherChange(teacher.teacherId)}
                />
                <label htmlFor={`teacher-check${i + 1}`}>{teacher.names}
                  <span>({teachersFromService.filter(item => item.teacher === teacher.names)?.length})</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="edu-course-widget hidden">
        <h5 className="widget-title mb-4">Restablecer filtros</h5>
        <button className='edu-btn btn-small mb--30'>Restablecer</button>
      </div>
    </div>
  )
}

export default CourseSidebarTwo;