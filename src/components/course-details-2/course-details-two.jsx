import React from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import SingleComment from '../course-details/single-comment';
import SingleProgressbar from '../course-details/single-progressbar';
import SingleAccordion from './single-accordion';

const CourseDetailsTwo = ({ course }) => {
  const { course_desc, course_desc_2, learn_list, course_desc_3, curriculum_desc, course_lessons, instructor_img, instructor_title, instructor_desc, social_links, reviews, instructor, rating, rating_count } = course || {};
    return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="course-details-content course-details-2">
                            <div className="course-overview">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Acerca de Este Curso</h3>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc}</p>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc_2}</p>
                                <div className="border-box">
                                    <h5 className="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">¿Qué Aprenderás?</h5>
                                    <div className="row g-5">
                                        <div className="col-lg-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                            <ul>
                                                <li>¡Aprende a usar Python profesionalmente, aprendiendo tanto Python 2 como Python 3!</li>
                                                <li>Construye 6 proyectos reales y bellos para tu portafolio (no aplicaciones aburridas)</li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                            <ul>
                                                <li>Entiende la teoría detrás de Vue.js y úsalo en proyectos reales</li>
                                                <li>Crea diseños responsivos, accesibles y hermosos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Requisitos</h3>
                                <ul className="mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <li>No se requiere conocimiento previo de Wordpress ya que todo será cubierto en este curso.</li>
                                    <li>Conocimientos básicos de HTML y CSS ayudan, pero no son imprescindibles</li>
                                    <li>No necesitas ninguna experiencia en programación. Esa es la belleza de Wordpress.</li>
                                    <li>Se requiere conocimiento básico de JavaScript</li>
                                </ul>

                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Público Objetivo</h3>
                                <ul className="mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <li>Desarrolladores frontend tanto novatos como experimentados interesados en aprender un marco moderno de JavaScript</li>
                                    <li>Si quieres aprender a dominar Wordpress sin quedar atrapado con jerga técnica, este curso es para ti.</li>
                                    <li>Este curso es para ti si deseas construir un sitio web, ya sea por razones personales o comerciales.</li>
                                    <li>Este curso es perfecto para ti si estás tomando el control de un sitio web de Wordpress existente, o quieres construir uno desde cero</li>
                                </ul>
                            </div>

                            <div className="course-curriculam mb--90">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Temas de Este Curso</h3>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua.</p>
                                <div className="accordion edu-accordion" id="accordionExample" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">

                                    <SingleAccordion show={true} id="1" title="Introducción al Curso" desc={[
                                        { title: 'Introducción', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', badge_list: true, question: 0, minutes: 10 },
                                        { title: 'Ejercicio del Curso / Archivos de Referencia', icon: 'icon-68' },
                                        { title: 'Instalación del Editor de Código (Opcional si ya tienes uno)', icon: 'icon-68' },
                                        { title: 'Incrustación de PHP en HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="2" title="Fundamentos del Lenguaje JavaScript" desc={[
                                        { title: 'Introducción', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', badge_list: true, question: 2, minutes: 12 },
                                        { title: 'Ejercicio del Curso / Archivos de Referencia', icon: 'icon-68' },
                                        { title: 'Instalación del Editor de Código (Opcional si ya tienes uno)', icon: 'icon-68' },
                                        { title: 'Incrustación de PHP en HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="3" title="Componentes & Data Binding" desc={[
                                        { title: 'Introducción', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', badge_list: true, question: 4, minutes: 15 },
                                        { title: 'Ejercicio del Curso / Archivos de Referencia', icon: 'icon-68' },
                                        { title: 'Instalación del Editor de Código (Opcional si ya tienes uno)', icon: 'icon-68' },
                                        { title: 'Incrustación de PHP en HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="4" title="Liderazgo en Gestión de Productos" desc={[
                                        { title: 'Introducción', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', icon: 'icon-68' },
                                        { title: 'Visión General del Curso', badge_list: true, question: 6, minutes: 18 },
                                        { title: 'Ejercicio del Curso / Archivos de Referencia', icon: 'icon-68' },
                                        { title: 'Instalación del Editor de Código (Opcional si ya tienes uno)', icon: 'icon-68' },
                                        { title: 'Incrustación de PHP en HTML', icon: 'icon-68' }
                                    ]} />
                                </div>
                            </div>

                            <div className="course-instructor-wrap mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Tus Instructores</h3>
                                <div className="course-instructor">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/team-02/${instructor_img}`} alt="imágenes del equipo" />
                                    </div>

                                    <div className="author-content">
                                        <h6 className="title">{instructor}</h6>
                                        <span className="subtitle">{instructor_title}</span>
                                        <p>{instructor_desc}</p>
                                        <ul className="social-share">
                                            {social_links?.map((social, i) => (
                                                <li key={i}>
                                                    <a href={social.link} target={social.target ? social.target : ''}>
                                                        <i className={social.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="course-review" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Opiniones de Estudiantes</h3>
                                <p>{rating} calificación promedio basada en {rating_count} calificaciones</p>
                                <div className="row g-0 align-items-center">
                                    <div className="col-sm-4">
                                        <div className="rating-box">
                                            <div className="rating-number">{rating}</div>
                                            <div className="rating">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                            </div>
                                            <span>({rating_count} Reseñas)</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="review-wrapper">
                                            <SingleProgressbar value={'100'} rating_value={rating_count} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-area">
                                    <h3 className="heading-title">Reseñas</h3>
                                    <div className="comment-list-wrapper">
                                        {reviews?.map((review, i) => (
                                            <SingleComment key={i} review={review} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <CourseDetailsSidebar course={course} details_2={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsTwo;