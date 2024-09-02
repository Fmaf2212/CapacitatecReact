import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_course } from '../../redux/features/cart-slice';
// import { add_to_wishlist, wishlistItems } from '../../redux/features/wishlist-slice';

const CourseTypeOne = ({ data, classes, image_location_path = '01' }) => {
  const { cartCourses } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // const wishlists = useSelector(wishlistItems);
  // const isWishlistSelected = wishlists.find(w => Number(w.id) === Number(data.id));

  // const handleWishlist = (course_item) => {
  //   if (wishlists.find(i => i.id === course_item.id)) {
  //     dispatch(
  //       add_to_wishlist({
  //         change_type: 'remove_wishlist', item: {
  //           id: course_item.id,
  //           img: `/assets/images/course/course-06/${course_item.img}`,
  //           title: course_item.title,
  //           price: course_item.course_price
  //         }
  //       }))
  //   } else {
  //     dispatch(
  //       add_to_wishlist({
  //         change_type: 'add_wishlist', item: {
  //           id: course_item.id,
  //           img: `/assets/images/course/course-06/${course_item.img}`,
  //           title: course_item.title,
  //           price: course_item.course_price
  //         }
  //       }))
  //   }
  // }

  // handle add to cart
  const handleAddToCart = (data) => {
    console.log(data);
    dispatch(cart_course({
      id: data.courseId,
      img: `https://apitest.yosoymitosis.com/StaticFiles/CourseImg/${data.image}`,
      price: data.price,
      title: data.name
    }))
  }

  return (
    <div className={`edu-course course-style-1 ${classes ? classes : ''} hover-button-bg-white`}>
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/course-details/${data.courseId}`} width="294.98" height="200" className='w-[294.98px]'>
          {data.image && (
            <img src={`https://apitest.yosoymitosis.com/StaticFiles/CourseImg/${data.image}`} alt="Course Meta" className='w-full' />
          )}
          </Link>
          <div className="time-top">
            <span className="duration"><i className="icon-61"></i>{data.duration}</span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{data.nivel}</span>
          <h6 className="title text-lg font-[system-ui]">
            <a href="#">{data.name}</a>
          </h6>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating} / 9 Rating)</span>
          </div>
          <div className='flex justify-between items-center w-full my-3'>
            <div className="text-[--color-secondary] font-semibold">S/. {data.price}</div>
            <div className="">{data.isCertified ? 'Certificado': 'Sin certificado'}</div>
          </div>
          <ul className="course-meta">
              <li><i className="icon-24"></i>{data.countClasses} Clases</li>
              <li><i className="icon-25"></i>{data.countStudents} Estudiantes</li>
          </ul>
        </div>
      </div>

      <div className="course-hover-content-wrapper">
        {/* <button onClick={() => handleWishlist(data)} className={`wishlist-btn ${isWishlistSelected ? 'active' : ''}`}><i className="icon-22"></i></button> */}
      </div>

      <div className="course-hover-content">
        <div className="content">
          {/* <button onClick={() => handleWishlist(data)} className={`wishlist-btn ${isWishlistSelected ? 'active' : ''}`}>
            <i className="icon-22"></i>
          </button> */}
          <span className="course-level">{data.nivel}</span>
          <h6 className="title text-lg font-[system-ui]">
            <Link href={`/course-details-2/${data.courseId}`}>
              {data.name}
            </Link>
          </h6>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating} / 9 Rating)</span>
          </div>
          <p>{data.littleDescription}</p>
          <div className='flex justify-between items-center w-full my-3'>
            <div className="text-[#fff] font-semibold">S/. {data.price}</div>
            <div className="text-[#fff]">{data.isCertified ? 'Certificado': 'Sin certificado'}</div>
          </div>
          <ul className="course-meta">
              <li><i className="icon-24"></i>{data.countClasses} Clases</li>
              <li><i className="icon-25"></i>{data.countStudents} Estudiantes</li>
          </ul>
          <a onClick={() => handleAddToCart(data)} className="edu-btn btn-secondary btn-small" style={{ cursor: 'pointer' }}>
            {cartCourses.some(item => item.id === data.courseId) ? 'Añadido' : 'Añadir'}
            <i className="icon-4"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseTypeOne;