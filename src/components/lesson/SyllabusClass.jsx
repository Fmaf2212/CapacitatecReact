import React from 'react'
import styles from './syllabus.module.css';
import Link from 'next/link';

const SyllabusClass = ({numeroClase, clase}) => {
    return (
        <Link className={styles["Syllabus-class"] + " " + styles["--active"]} href="/cursos/react/">
            <div className={styles["Syllabus-class-container"]}>
                <span className={styles["Syllabus-class-container-icon"]}>{numeroClase}</span>
                <div className={styles["Syllabus-class-container-text"]}>
                    <p>{clase}</p>
                </div>
            </div>
        </Link>
    )
}

export default SyllabusClass