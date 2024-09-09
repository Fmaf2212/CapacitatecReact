import React from 'react';
import { useState, useEffect } from 'react';
import { course_data } from '../../data';
import SortingArea from '../course-filter/sorting-area';
import CourseTypeOne from '../course/course-type-one';

import useProductStore from '../../store/products';

import axios from 'axios';

import ReactPaginate from "react-paginate";
import CourseSidebarTwo from '../common/sidebar/course-sidebar-2';
import { API_TOKEN } from '../../data/bearerToken';

const CourseArea = () => {
  const { products, setProducts, setSortingOption } = useProductStore();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const paginateNew = (data) => { setCurrentPage(data.selected + 1) }

  const showNextButton = currentPage !== totalPages;
  const showPrevButton = currentPage-1 !== 0;

  const [teacherIds, setTeacherIds] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);

  const [sortingIds, setSortingIds] = useState({valueSort: 'Filtros', columnOrder: '',
    orderDirection: ''});

  // Función para actualizar los teacherIds seleccionados
  const handleTeacherSelection = (selectedIds) => {
    setTeacherIds(selectedIds); // Actualiza el estado local teacherIds con los profesores seleccionados
    localStorage.setItem('selectedTeachers', JSON.stringify(selectedIds));
  };

  // Función para actualizar los categoryIds seleccionados
  const handleCategorySelection = (selectedIds) => {
    setCategoryIds(selectedIds); // Actualiza el estado local teacherIds con las categorías seleccionadas
    localStorage.setItem('selectedCategories', JSON.stringify(selectedIds));
  };

  // Función para actualizar los Sorts seleccionados
  const handleSortingSelection = ({ valueSort, columnOrder, orderDirection }) => {
    const sortingData = {
      valueSort: valueSort || '',  // Si valueSort es null, undefined o '', se usará '' como valor predeterminado.
      columnOrder: columnOrder || '',
      orderDirection: orderDirection || '',
    };
    setSortingIds(sortingData);
    localStorage.setItem('sortingOption', JSON.stringify(sortingData));
  };

  const fetchData = async () => {
    const teacherIdString = teacherIds.join(','); // Convierte array a string separado por comas
    const categoryIdString = categoryIds.join(',');

    const pageNumber = 1;
    const pageSize = 10;

    try {
      const response = await axios.post(
        "https://apitest.yosoymitosis.com/v1/Course/GetCoursesByUser",
        {
          number: pageNumber,
          size: pageSize,
          nivelId: 0,
          isCertified: null,
          lenguageId: 0,
          categoryId: categoryIdString,
          userId: 0,
          teacherId: teacherIdString,
          columnOrder: sortingIds.columnOrder,
          orderDirection: sortingIds.orderDirection
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          },
        }
      );
      if (response.data.message === "Success") {
        const savedOption = localStorage.getItem('sortingOption');
        if (savedOption !== "Filtros") {
          setSortingOption(savedOption);
          sortCourses(savedOption, response.data.data.courseByUsers);
        }else if(savedOption==="Filtros"){
          setSortingOption(savedOption);
          sortCourses(savedOption, response.data.data.courseByUsers);
        }
      } else {
        console.error("Error al consumir el servicio GetProductsStore");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const savedSortingOption = localStorage.getItem('sortingOption');
    if (savedSortingOption) {// cumple siempre y cuando savedSortingOption contenga valor y no sea null
      setSortingIds(JSON.parse(savedSortingOption));//convierto savedSortingOption que es una cadena JSON a un objeto JS, y lo seteo a mi estado local sortingIds.
    }

    const savedCategories = localStorage.getItem('selectedCategories');
    if (savedCategories) {
      setCategoryIds(JSON.parse(savedCategories));
    } else {
      setCategoryIds([]);
    }

    const savedTeachers = localStorage.getItem('selectedTeachers');
    if (savedTeachers) {
      setTeacherIds(JSON.parse(savedTeachers));
    } else {
      setTeacherIds([]);
    }
  }, [])//si no hay nada dentro del array de dependencias, quiere decir que se ejecutará una sola vez post renderizado del componente.

  useEffect(() => {
    fetchData();
  }, [currentPage, productsPerPage, setProducts, teacherIds, categoryIds, sortingIds]);

  const sortCourses = (value,arrayProducts) => {

    if (value === 'Ordenar de A - Z') {
      arrayProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'Ordenar de Z - A') {
      arrayProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === 'Precio más bajo') {
      arrayProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value === 'Precio más alto') {
      arrayProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      arrayProducts = arrayProducts;
    }
    setProducts(arrayProducts);
  }

  return (
    <div className="edu-course-area course-area-1 gap-tb-text">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 order-lg-2">
            <CourseSidebarTwo
              onTeacherSelect={handleTeacherSelection}
              onCategorySelect={handleCategorySelection}
            />
          </div>
          <div className="col-lg-9 col-pr--35 order-lg-1">
            <SortingArea
              course_items={products}
              setCourses={setProducts}
              courses={products}
              onSortingSelect={handleSortingSelection}
            />

            <div className="row g-5">
              {paginatedProducts?.map((item, index) => {
                return (
                  <div key={index} className="col-md-6 col-xl-4">
                    <CourseTypeOne data={item} classes="course-box-shadow" />
                  </div>
                )
              })}
            </div>
            <div className="flex flex-row mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center sm:items-center">
              <ReactPaginate
                nextLabel={showNextButton ? (<>
                  <i className="icon-east"></i>
                </>) : null}
                onPageChange={paginateNew}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel={showPrevButton ? (<>
                  <i className="icon-west"></i>
                </>) : null}
                pageClassName="page-items"
                pageLinkClassName="page-links"
                previousClassName="page-items"
                previousLinkClassName="page-links"
                nextClassName="page-items"
                nextLinkClassName="page-links"
                breakLabel='...'
                breakClassName="page-items"
                breakLinkClassName="page-links"
                containerClassName="edu-pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}>
              </ReactPaginate>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseArea;