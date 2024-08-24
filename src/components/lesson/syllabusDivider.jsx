import React from 'react'
import styles from './syllabus.module.css';

const SyllabusDivider = () => {
  return (
    <div className={styles['Syllabus-divider']} data-testid="Syllabus-divider">
      <span className={styles["Syllabus-divider-icon"]}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flag-pennant" className={styles["svg-inline--fa"] + " " + styles["fa-flag-pennant"]} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352L433 213.6c9-3.4 15-12 15-21.6s-6-18.2-15-21.6L64 32z"></path>
        </svg>
      </span>
      <div className={styles["Syllabus-divider-text"]} data-testid="Syllabus-divider-text">
        <p>Introducción y requisitos</p>
      </div>
    </div>
  )
}

export default SyllabusDivider