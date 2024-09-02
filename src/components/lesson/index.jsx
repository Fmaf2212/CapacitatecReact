import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../../layout'

import styles from './syllabus.module.css';
import File from './File';
import Folder from './Folder';
import FilesAndLinks from './FilesAndLinks';
import VideoPlayer from './VideoPlayer';
import Syllabus from './syllabus';

const index = () => {
  const [minHeight, setMinHeight] = useState('auto');
  const [tabs, setTabs] = useState([]);
  const [isVisibleSyllabus, setIsVisibleSyllabus] = useState(true);
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    // techOrder: ["youtube"],
    sources: [{
      // src: 'https://path-to-your-video-file.mp4',
      src: 'https://apitest.yosoymitosis.com/StaticFiles/video/Ciseco%20-%20Google%20Chrome%202024-04-10%2020-39-53.mp4',
      type: 'video/mp4'
      //type: 'video/youtube',  // Cambia el tipo a 'video/youtube'
    }]
  };

  useEffect(() => {
    // Función para calcular el minHeight
    const calculateMinHeight = () => {
      const width = window.innerWidth;

      if (width >= 1441) {
        const calculatedMinHeight = 533.812 + ((width - 1441) * 0.1); // Ajusta el incremento según sea necesario
        setMinHeight(`${calculatedMinHeight}px`);
      } else {
        setMinHeight('auto');
      }
    };
    // const calculateWidth = () => {
    //   const width = window.innerWidth;

    //   if (width >= 1441) {
    //     const calculatedWidth = 533.812 + ((width - 1441) * 0.1); // Ajusta el incremento según sea necesario
    //     setWidth(`${calculatedWidth}px`);
    //   } else {
    //     setWidth('auto');
    //   }
    // };

    const updateTabs = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setTabs([
          { label: 'Temario', isActive: false },
          { label: 'Recursos', isActive: true },
          { label: 'Aportes', isActive: false, count: 117 },
          { label: 'Preguntas', isActive: false, count: 27 },
        ]);
        setIsVisibleSyllabus(false);
      } else {
        setTabs([
          { label: 'Recursos', isActive: true },
          { label: 'Transcripción', isActive: false },
        ]);
        setIsVisibleSyllabus(true);
      }
    };

    calculateMinHeight();
    // calculateWidth();
    updateTabs();

    window.addEventListener('resize', calculateMinHeight);
    // window.addEventListener('resize', calculateWidth);
    window.addEventListener('resize', updateTabs);

    return () => {
      window.removeEventListener('resize', calculateMinHeight);
      // window.removeEventListener('resize', calculateWidth);
      window.removeEventListener('resize', updateTabs);
    };
  }, []);

  const fileCodeIcon = (
    <svg className={styles['svg-inline--fa'] + ' ' + styles['fa-file-code']} aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="currentColor" d="M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84C169.1 278.3 169.1 265.7 162.1 257.8zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z">
      </path>
    </svg>
  );

  const fileIcon = (
    <svg className={styles['svg-inline--fa'] + ' ' + styles['fa-file']} aria-hidden="true" focusable="false" data-prefix="far" data-icon="file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="currentColor" d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z">
      </path>
    </svg>
  );

  const imgPlatzi = (
    <img src="https://static.platzi.com/media/favicons/platzi_favicon.png" alt="" loading="lazy" />
  );

  const imgGithub = (
    <img src="https://github.com/fluidicon.png" alt="" loading="lazy" />
  );

  return (
    <div className='sticky-header'>
      <div id="main-wrapper" className="main-wrapper bg-[#116d5e]" style={{minHeight: "calc(100vh - 90px)"}}>
        <Header no_top_bar={true} />
        {/* <BreadcrumbThree title="My Account" subtitle="Account" /> */}
        {
          !!isVisibleSyllabus
          ?
          <Syllabus />
          :
          ''
        }
        <div className={styles['MaterialView'] + " " + styles['MaterialView-type--video']} style={{ maxHeight: "calc(100vh)" }}>
          <div className={styles['MaterialView-video']}>
            <div className={styles['MaterialView-video-item']} data-testid='MaterialView-video-item' style={{ minHeight: minHeight }}>
              <div className={styles['MaterialVideo']}>
                <div className={styles['VideoPlayer']} data-testid='VideoPlayer'>
                  <div className='flex justify-center items-center'>
                    <VideoPlayer options={videoJsOptions} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['MaterialView-content']}>
              <div className={styles['MaterialView-content-wrapper']}>
                <div className={styles['Header']}>
                  <div className={styles['Header-course']}>
                    <div className={styles['Header-course-info']}>
                      <img className={styles['Header-course-info-badge']} data-testid="Header-course-info-badge" src="https://static.platzi.com/media/achievements/piezas-landing-introduccion-react-js_badge-5cb7b891-69d3-4de4-bdab-1641b4c30312.png" alt="Curso de React.js" loading="lazy" />
                      <div className={styles['Header-course-info-content']}>
                        <a href="/cursos/react/">Curso de React.js</a>
                        <img src="https://static.platzi.com/media/avatars/avatars/juandc_90056496-2887-406b-860e-b86185a20940.png" alt="Juan David Castro Gallego" loading="lazy"></img>
                        <p>Juan David Castro Gallego</p>
                      </div>
                    </div>
                    <div className={styles['Header-course-actions']}>
                      <div>
                        <button className={styles['BaseMaterial__ControlButton'] + ' ' + styles['Header-course-actions-next'] +' '+ styles['border-radius-left']} type='button' aria-label='¿Qué es un componente?'>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="forward-step" className={styles["svg-inline--fa"]+" "+styles[ "fa-forward-step"]} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"></path></svg>
                          <div className={styles['BaseMaterial__Tooltip']}>
                            <p>¿Qué es un componente?</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles['Header-class']}>
                    <div className={styles['Header-class-title']}>
                      <h1>¿Qué necesitas para aprender React.js?</h1>
                      <span>1/34</span>
                    </div>
                  </div>
                </div>
                <div className={styles['Tabs']}>
                  <div className={styles['u-wrapper']}>
                    <div className={styles['Tabs-tabs']}>
                      {tabs.map((tab, index) => (
                        <div
                          key={index}
                          className={`${styles['Tab']} ${tab.isActive ? styles['is-active'] : ''}`}
                        >
                          {tab.label}
                          {tab.count && <span>{tab.count}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles['Tabs-content']}>
                    <div className={styles['Resources']}>
                      <div className={styles['Resources-description']}></div>
                      <div className={styles['FilesAndLinks']}>
                        <h4 className={styles['FilesAndLinks-title']}>Archivos de la clase</h4>
                        <div>
                          <div className={styles['FilesTree']}>
                            <div className={styles['FilesTree-head']}>
                              <div className={styles['Breadcrumbs']}>
                                <p className={styles['Breadcrumbs-item']+' '+styles['Breadcrumbs-item--last']+' '+styles['Breadcrumbs-item--home']}>
                                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" className={styles['svg-inline--fa']+' '+styles['fa-house']} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z">
                                    </path>
                                  </svg>
                                </p>
                                <span className={styles['Breadcrumbs-divider']+' '+styles['Breadcrumbs-divider--first']}>/</span>
                              </div>
                              <a href="https://github.com/platzi/curso-react-intro/archive/main.zip" target="_blank" className={styles['FilesTree-download']} data-testid="FilesTree-download">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                className={styles['svg-inline--fa']+' '+styles['fa-download']+' '+styles['FilesTree-download-icon']} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z">
                                  </path>
                                </svg>
                                <p className={styles['FilesTree-download-text']}>Descargar todo</p>
                              </a>
                            </div>
                            <div className={styles['FilesTree-items']}>
                              <File fileName={"package.json"} icon={fileCodeIcon} />
                              <File fileName={"package-lock.json"} icon={fileCodeIcon} />
                              <File fileName={".gitignore"} icon={fileIcon} />
                              <File fileName={"README.md"} icon={fileIcon} />
                              <Folder fileName={"public"} />
                              <Folder fileName={"src"} />
                            </div>
                          </div>
                        </div>
                        <h4 className={styles['FilesAndLinks-title']}>Lecturas recomendadas</h4>
                        <div>
                          <FilesAndLinks title={"Curso de Programación Básica - Platzi"} link={"https://platzi.com/cursos/programacion-basica/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"Platzi: Cursos online profesionales de tecnología"} link={"https://platzi.com/ruta/web-frontend/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"Curso Básico de JavaScript [Empieza Gratis] - Platzi"} link={"https://platzi.com/cursos/basico-javascript/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"Curso Práctico de JavaScript - Platzi"} link={"https://platzi.com/cursos/javascript-practico/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"Curso de Git y Github [Empieza Gratis] - Platzi"} link={"https://platzi.com/cursos/git-github/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript - Platzi"} link={"https://platzi.com/cursos/npm/"} imagen={imgPlatzi} />
                          <FilesAndLinks title={"GitHub - platzi/curso-react-intro"} link={"https://github.com/platzi/curso-react-intro"} imagen={imgGithub} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['MaterialView-community']} style={{ maxHeight: "calc(100vh)" }}>
            <div className={styles['MaterialView-community-wrapper']} style={{ maxHeight: "calc(-52px + 100vh)" }}>
              <div className={styles['MaterialView-editor']}>
                <div className={styles['EditorWrapper']}>
                  <button className={styles['EditorWrapper-input']}>Escribe tu aporte o pregunta</button>
                </div>
              </div>
              <div className={styles['CommunityTabs']}>
                <div className={styles['CommunityTabs-content']}>
                  <div className={styles['u-wrapper']}>
                    <div className={styles['CommunityTabs-content-tabs']}>
                      <div className={styles['Tab'] + " " + styles['is-active']}>
                        <p>Aportes <span>116</span></p>
                      </div>
                      <div className={styles['Tab']}>
                        <p>Preguntas <span>27</span></p>
                      </div>
                    </div>
                  </div>
                  <div className={styles['CommunityTabs-content-content']}>
                    <div className={styles["OrderBy"]}>
                      <span className={styles["OrderBy-text"]}>Ordenar por:</span>
                      <button className={styles["OrderBy-button"] + " " + styles["is-active"]} type="button">más votados</button>
                      <button className={styles["OrderBy-button"]} type="button">nuevos</button>
                      <button className={styles["OrderBy-button"]} type="button">sin responder</button>
                    </div>
                    <div className={styles['Contributions-content']}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer style_2={'footer-dark bg-image footer-style-2'} /> */}
      </div>
    </div>
  )
}

export default index