import React, { useState } from 'react'
import styles from './syllabus.module.css';
import SyllabusDivider from './syllabusDivider'
import SyllabusClass from './SyllabusClass';

const Syllabus = () => {
  // Estado para controlar si el Syllabus está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado abierto/cerrado
  const toggleSyllabus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles['Syllabus']} ${isOpen ? styles['Syllabus--open'] : styles['Syllabus--close']}`} style={{ maxHeight: "calc(-53px + 100vh)" }}>
      <div className={styles['Syllabus-container']}>
        <div className={styles['Syllabus-header']}>
          <button onClick={toggleSyllabus} aria-label="Mostrar temario" className={styles['Syllabus-toggle']}>
            {isOpen ? (
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className={styles["svg-inline--fa"] + " " + styles["fa-chevron-left"]} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
              </svg>
            ) : (
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className={styles["svg-inline--fa"] + " " + styles["fa-chevron-right"]} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
              </svg>
            )}
          </button>
          <div className={styles["Syllabus-course"]}>
            <figure className={styles["Syllabus-course-badge"]}>
              <img src="https://static.platzi.com/media/achievements/piezas-landing-introduccion-react-js_badge-5cb7b891-69d3-4de4-bdab-1641b4c30312.png" alt="Curso de React.js"/>
            </figure>
            <a href="/cursos/react/" className={styles["Syllabus-course-title"]}>Curso de React.js</a>
          </div>
        </div>
        <SyllabusDivider seccion={"Introducción y requisitos"} />
        <SyllabusClass numeroClase={"1"} clase={"¿Qué necesitas para aprender React.js?"} />
        <SyllabusDivider seccion={"Maquetación con React.js"} />
        <SyllabusClass numeroClase={"2"} clase={"¿Qué es un componente?"} />
        <SyllabusClass numeroClase={"3"} clase={"Componentes de TODO Machine"} />
      </div>
    </div>
  )
}

export default Syllabus