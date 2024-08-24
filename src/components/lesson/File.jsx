import React from 'react'
import styles from './syllabus.module.css';

const File = ({fileName, icon}) => {
	return (
		<div className={styles['File']}>
			<button className={styles['File-row']}>
				<div className={styles['File-info']}>
					<div className={styles['File-details']}>
						{icon}
						<p className={styles['File-name']}>{fileName}</p>
					</div>
					<a href="https://static.platzi.com/media/tmp/class-files/github/curso-react-intro/curso-react-intro-main/package.json" target="_blank" className={styles['File-download']} aria-label="Descargar archivo package.json">
						<svg className={styles['svg-inline--fa'] + ' ' + styles['fa-download ']} aria-hidden="true" focusable="false" data-prefix="far" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor" d="M448 304h-53.5l-48 48H448c8.822 0 16 7.178 16 16V448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80C48 359.2 55.18 352 64 352h101.5l-48-48H64c-35.35 0-64 28.65-64 64V448c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-80C512 332.7 483.3 304 448 304zM432 408c0-13.26-10.75-24-24-24S384 394.7 384 408c0 13.25 10.75 24 24 24S432 421.3 432 408zM239 368.1C243.7 373.7 249.8 376 256 376s12.28-2.344 16.97-7.031l136-136c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L280 294.1V24C280 10.75 269.3 0 256 0S232 10.75 232 24v270.1L136.1 199c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L239 368.1z">
							</path>
						</svg>
						<div className={styles['File-download-tooltip']}>Descargar archivo</div>
					</a>
				</div>
			</button>
		</div>
	)
}

export default File