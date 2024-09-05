import React, { useEffect, useState } from 'react';
// import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { course_data } from '../../../data';
import { add_category, add_force_page, add_instructor, add_item_offset, add_language, add_level, add_price, reset_filter }
  from '../../../redux/features/filter-slice';
import axios from 'axios';

const courses = course_data.filter((arr, index, self) =>
    index === self.findIndex((i) => (i.img === arr.img && i.State === arr.State))
);

const max_prices = courses.map(item => Number(item.course_price))
const maxPrice = Math.max(...max_prices);

const all_categories = [...new Set(courses.map(course => course.category))];
const all_instructors = [...new Set(courses.map(course => course.instructor))];

const CourseSidebarTwo = ({ course_items }) => {
    const [price, setPrice] = useState(0); // Inicializa el precio
    const [showCategory, setShowCategory] = useState(true);
    const [categoriesFromService, setCategoriesFromService] = useState([]);
    const [showTeachers, setShowTeachers] = useState(true);
    const [teachersFromService, setTeachersFromService] = useState([]);
    const { categories } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    // handleCategory
    const handleCategory = (cate) => {
        const index = categories.findIndex(item => item === cate);
        if (index >= 0) {
            dispatch(add_category({ changeType: 'remove', item: cate, maxPrice: price }))
        }
        else {
            dispatch(add_category({ changeType: 'added', item: cate, maxPrice: price }))
        }
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    }

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.post('https://apitest.yosoymitosis.com/v1/Category/GetCategoryFilter', {}, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250Q2FwYWNpdGF0ZWMifQ.bRpwHDRVjqSYrYnDwXY2iySlEZdjkA3kHGtx7MTm8Ro'
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
                const response = await axios.post('https://apitest.yosoymitosis.com/v1/Teacher/GetTeacherFilter', {}, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250Q2FwYWNpdGF0ZWMifQ.bRpwHDRVjqSYrYnDwXY2iySlEZdjkA3kHGtx7MTm8Ro'
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

    return (
        <div className="course-sidebar-2">
            <div className="edu-course-widget widget-category">
                <div className="inner">
                    <h5 className={`widget-title widget-toggle ${showCategory?'active':''}`} onClick={()=> setShowCategory(!showCategory)}>Categorías</h5>

                    <div className="content" style={{display:showCategory?'block':'none'}}>
                        {categoriesFromService.map((category, i) => (
                            <div key={category.categoryId} className="edu-form-check" >
                                <input
                                    onClick={() => handleCategory(category.description)}
                                    type="checkbox"
                                    checked={categories.includes(category.description)}
                                    id={`cat-check${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check${i + 1}`}>{category.description}
                                    <span>({course_items.filter(item => item.category === category.description)?.length})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="edu-course-widget widget-category">
                <div className="inner">
                    <h5 className={`widget-title widget-toggle ${showTeachers?'active':''}`} onClick={()=> setShowTeachers(!showTeachers)}>Profesores</h5>

                    <div className="content" style={{display:showTeachers?'block':'none'}}>
                        {teachersFromService.map((teacher, i) => (
                            <div key={teacher.teacherId} className="edu-form-check" >
                                <input
                                    onClick={() => handleCategory(teacher.names)}
                                    type="checkbox"
                                    checked={categories.includes(teacher.names)}
                                    id={`cat-check${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check${i + 1}`}>{teacher.names}
                                    <span>({course_items.filter(item => item.teacher === teacher.names)?.length})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="edu-course-widget widget-instructor">
                <div className="inner">
                    <h5 className={`widget-title widget-toggle ${showInstructor?'active':''}`}  onClick={()=> setShowInstructor(!showInstructor)}>Docente</h5>

                    <div className="content" style={{display:showInstructor?'block':'none'}}>
                        {all_instructors.map((instructor, i) => (
                            <div key={i} className="edu-form-check" >
                                <input onClick={() => handleInstructor(instructor)} checked={instructors.includes(instructor)} 
                                type="checkbox" id={`cat-check-2${i + 1}`} readOnly />
                                <label htmlFor={`cat-check-2${i + 1}`}>{instructor}
                                    <span>({course_items.filter(item => item.instructor === instructor)?.length})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="edu-course-widget">
                <h5 className="widget-title mb-4">Reset Filter</h5>
                <button onClick={()=> dispatch(reset_filter(price))} className='edu-btn btn-small mb--30'>Reset Filter</button>
            </div>
        </div>
    )
}

export default CourseSidebarTwo;