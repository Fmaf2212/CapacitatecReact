import React from 'react';
import { useState, useEffect } from 'react';
import { course_data } from '../../data';
import SortingArea from '../course-filter/sorting-area';
import CourseTypeOne from '../course/course-type-one';

import useProductStore from '../../store/products';

import axios from 'axios';

import ReactPaginate from "react-paginate";
import CourseSidebarTwo from '../common/sidebar/course-sidebar-2';

const CourseArea = () => {
  // const coursePerView = 8;
  // const [next, setNext] = useState(coursePerView);
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState(course_data);
  const { products, setProducts } = useProductStore();
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

  const course_items = course_data.filter((arr, index, self) =>
    index === self.findIndex((i) => (i.img === arr.img && i.State === arr.State)));

  // handleLoadData
  // const handleLoadData = () => {
  //   setNext(value => value + 4)
  // }
  useEffect(() => {
    const fetchData = async () => {
      const pageNumber = 1;
      const pageSize = 10;
      try {
         //let userId = 0; Valor por defecto

        // Verificar si existe la clave USER_AUTH en localStorage
        // const infoUserLogued = localStorage.getItem("USER_AUTH");
        // if (infoUserLogued) {
        //   const userData = JSON.parse(infoUserLogued);
        //   userId = userData.userId;
        // }
        const response = await axios.post(
          "https://apitest.yosoymitosis.com/v1/Course/GetCoursesByUser",
          {
            number: pageNumber,
            size: pageSize,
            nivelId: 0,
            isCertified: null,
            lenguageId: 0,
            categoryId: 0,
            userId: 0
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250Q2FwYWNpdGF0ZWMifQ.bRpwHDRVjqSYrYnDwXY2iySlEZdjkA3kHGtx7MTm8Ro'
            },
          }
        );
        if (response.data.message === "Success") {
          // setDataProducts(response.data.data.productStore);
          // console.log(response.data.data.productStore)
          setProducts(response.data.data.courseByUsers);
        } else {
          console.error("Error al consumir el servicio GetProductsStore");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage, productsPerPage, setProducts]);

  return (
    <div className="edu-course-area course-area-1 gap-tb-text">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 order-lg-2">
            <CourseSidebarTwo course_items={course_items} />
          </div>
          <div className="col-lg-9 col-pr--35 order-lg-1">
            <SortingArea course_items={course_data} setCourses={setCourses} courses={totalProducts} />

            <div className="row g-5">
              {paginatedProducts?.map((item, index) => {
                return (
                  <div key={index} className="col-md-6 col-xl-4">
                    <CourseTypeOne data={item} classes="course-box-shadow" />
                  </div>
                )
              })}
            </div>
            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {paginatedProducts.map((item, index) => (
                // <ProductCardService data={item} key={index} />
                console.log(item, index)
              ))}
            </div> */}
            <div className="flex flex-row mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center sm:items-center">
              <ReactPaginate
                // nextLabel={showNextButton ? (<span className="w-10 h-10 flex items-center justify-center transition-colors bg-[#a59dac] hover:bg-[#625c67] rounded-md text-white"><i className="las la-angle-right"></i></span>) : null}
                nextLabel={showNextButton ? (<>
                  <i className="icon-east"></i>
                </>) : null}
                onPageChange={paginateNew}
                pageRangeDisplayed={3} // Mostrará un total de 3 números de página a la vez
                // marginPagesDisplayed={1}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                // previousLabel={showPrevButton ? (<span className="w-10 h-10 flex items-center justify-center transition-colors bg-[#a59dac] hover:bg-[#625c67] rounded-md text-white"><i className="las la-angle-left"></i></span>) : null}
                previousLabel={showPrevButton ? (<>
                  <i className="icon-west"></i>
                </>) : null}
                // pageClassName={`custom-link block border border-none hover:bg-[#a764e0] hover:${styles.shadowInner} hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-md`}
                pageClassName="page-items"
                pageLinkClassName="page-links"
                previousClassName="page-items"
                previousLinkClassName="page-links"
                nextClassName="page-items"
                nextLinkClassName="page-links"
                breakLabel='...'
                breakClassName="page-items"
                breakLinkClassName="page-links"
                // containerClassName="flex items-center justify-center mt-8 mb-4 gap-2"
                containerClassName="edu-pagination"
                // activeClassName={`bg-[#a764e0] text-white transition-colors transition duration-300 ${styles.shadowInner}`}></ReactPaginate>
                activeClassName="active"
                renderOnZeroPageCount={null}>
              </ReactPaginate>
            </div>

            {/* {next < courses.length &&
              <div onClick={handleLoadData} className="load-more-btn" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1200">
                <a className="edu-btn" style={{ cursor: 'pointer' }}>Load More <i className="icon-56"></i></a>
              </div>
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseArea;