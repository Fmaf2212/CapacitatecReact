import React, { useRef, useState } from 'react'
import Input from '../Input/Input'
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';

const index = () => {
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPassword2, setShowNewPassword2] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [imageSrc, setImageSrc] = useState('https://static.platzi.com/static/website/v2/images/avatar_default.7516253fc982.png');

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleShowNewPassword2 = () => {
    setShowNewPassword2(!showNewPassword2);
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Activar el clic en el input de archivo
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`nc-AccountPage`} data-nc-id="AccountPage">
      <Header no_top_bar={true} />
      <BreadcrumbThree title="Perfil" subtitle="Editar perfil" />
      <div className="max-w-[1000px] mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <div className="flex flex-col md:flex-row max-sm:items-center">
            <div className="flex-[4] lg:flex-[.32] w-full flex justify-center sm:justify-center items-start sm:px-5 px-9">
              {/* AVATAR */}
              <div className="relative rounded-full overflow-hidden flex">
                {/* <img
                  src={selectedImage||urlProfilePictureUser}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover z-0"
                /> */}
                <label htmlFor="imageInput" className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mt-1 text-xs">Change Image</span>
                </label>
                <input
                  id="imageInput"
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept=".png, .jpg, .jpeg"
                  // onChange={handleImageChange}
                />
              </div>
              {/* ----------------------------------------------------- */}
              <div className="mb-[26px] p-[21px] text-center border border-slate-300 rounded-lg sm:max-w-[417px]">
                <figure className="mb-[18px]">
                  <img className='rounded-[50%] object-cover max-w-[128px] max-h-[128px] w-full h-[128px]' alt="My Profile" id="droppable" src={imageSrc} />
                </figure>
                <div className="text-[#696969]">
                  Arrastra aquí tu imagen de perfil o
                  &nbsp;
                  <a
                    className="font-bold text-[#0791e6] cursor-pointer"
                    onClick={handleClick}
                  >
                    Subir una foto
                  </a>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex-[6] lg:flex-[.68] w-full mt-10 md:mt-0 md:pl-8 px-9 sm:px-5 max-w-3xl space-y-6 mx-auto">
              <div className="flex flex-col border border-slate-300 px-6 pb-6 pt-4 rounded-lg">
                <h1 className="block text-lg sm:text-xl lg:text-2xl font-semibold text-start pt-2">Cambiar contraseña</h1>
                <div className="flex flex-col gap-6 mt-4 items-start">
                  <div className="w-full">
                    <label htmlFor="current-password">Contraseña actual</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                        <i className="icon-68 text-xl w-[16.7px] flex justify-center"></i>
                      </span>
                      <div className="relative w-full">
                        <Input
                          id="current-password"
                          type={showCurrentPassword ? 'text' : 'password'}
                          className="!rounded-l-none h-[44px] border-neutral-400 pl-4 pr-12"
                          // onChange={handleInputCurrentPassword}
                        />
                          <button
                            onClick={toggleShowCurrentPassword}
                            type="button"
                            aria-label={'Mostrar contraseña'}
                            className="focus:outline-none absolute top-[20%] right-5 -translate-y-1/2 bg-[#fff]"
                          >
                            {showCurrentPassword ? (
                              <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                                <rect id="Icons" x="-960" y="-256" width="1280" height="800" style={{ fill: "none" }}/>
                                <g id="Icons1">
                                  <g id="eye-slash">
                                    <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"/>
                                    <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style={{fillRule:"nonzero"}}/>
                                    <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"/>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                                <rect id="Icons" x="-896" y="-256" width="1280" height="800" style={{ fill: "none" }} />
                                <g id="Icons1">
                                  <g id="eye">
                                    <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" /><path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                  </g>
                                </g>
                              </svg>
                            )}
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="new-password">Contraseña nueva</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                        <i className="icon-68 text-xl w-[16.7px] flex justify-center"></i>
                      </span>
                      <div className="relative w-full">
                        <Input
                          id="new-password"
                          type={showNewPassword ? 'text' : 'password'}
                          className="!rounded-l-none h-[44px] border-neutral-400 pl-4 pr-12"
                          // value={inputNewPasswordValue}
                          // onChange={handleInputNewPasswordValue}
                        />
                        <button
                          onClick={toggleShowNewPassword}
                          type="button"
                          aria-label={'Mostrar contraseña'}
                            className="focus:outline-none absolute top-[20%] right-5 -translate-y-1/2 bg-[#fff]"
                        >
                          {showNewPassword ? (
                              <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                                <rect id="Icons" x="-960" y="-256" width="1280" height="800" style={{ fill: "none" }}/>
                                <g id="Icons1">
                                  <g id="eye-slash">
                                    <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"/>
                                    <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style={{fillRule:"nonzero"}}/>
                                    <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"/>
                                  </g>
                                </g>
                              </svg>
                          ) : (
                            <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                              <rect id="Icons" x="-896" y="-256" width="1280" height="800" style={{ fill: "none" }} />
                              <g id="Icons1">
                                <g id="eye">
                                  <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" /><path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                </g>
                              </g>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="new-password2">Repetir contraseña nueva</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                        <i className="icon-68 text-xl w-[16.7px] flex justify-center"></i>
                      </span>
                      <div className="relative w-full">
                        <Input
                          id="new-password2"
                          type={showNewPassword2 ? 'text' : 'password'}
                          className="!rounded-l-none h-[44px] border-neutral-400 pl-4 pr-12"
                          // value={inputNewPassword2Value}
                          // onChange={handleInputNewPassword2Value}
                        />
                          <button
                            onClick={toggleShowNewPassword2}
                            type="button"
                            // aria-label={showCurrentPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            className="focus:outline-none absolute top-[20%] right-5 -translate-y-1/2 bg-[#fff]"
                          >
                            {showNewPassword2 ? (
                              <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                                <rect id="Icons" x="-960" y="-256" width="1280" height="800" style={{ fill: "none" }}/>
                                <g id="Icons1">
                                  <g id="eye-slash">
                                    <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"/>
                                    <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style={{fillRule:"nonzero"}}/>
                                    <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"/>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              <svg width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                                <rect id="Icons" x="-896" y="-256" width="1280" height="800" style={{ fill: "none" }} />
                                <g id="Icons1">
                                  <g id="eye">
                                    <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" /><path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                  </g>
                                </g>
                              </svg>
                            )}
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <button className="cursor-pointer nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-md sm:text-lg font-medium py-3 px-4 sm:py-3.5 sm:px-6 font-[system-ui] ttnc-ButtonSecondary bg-[#fff] text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-slate-300 sm:h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"><p className="whitespace-nowrap">Cambiar contraseña</p></button>
                  </div>
                </div>
              </div>
              <div className=" border border-slate-300 dark:border-neutral-700 px-6 pb-10 pt-4 rounded-lg space-y-6">
                <h1 className="block text-lg sm:text-xl lg:text-2xl font-semibold text-start pt-2">Editar datos de usuarios</h1>
                <div>
                  <label>Tipo de documento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-7 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <div className="relative inline-block max-w-[265px] w-full">
                      <select className="appearance-none py-2 pl-3 nc-Select h-[44px] max-w-[265px] !rounded-l-none border border-neutral-400 block w-full text-lg font-semibold rounded-2xl bg-[#fff] dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="">Seleccionar...</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">Pasaporte</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                          <path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Documento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-7 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400"/>
                  </div>
                </div>
                <div>
                  <label>Nombres</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-25 text-xl w-[16.7px] flex justify-center pl-0 "></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400"/>
                  </div>
                </div>
                <div>
                  <label>Apellidos</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-25 text-xl w-[16.7px] flex justify-center pl-0 "></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400" />
                  </div>
                </div>
                <div className="max-w-lg">
                  <label>Fecha de Nacimiento</label>
                  <div className="mt-1.5 flex w-full max-w-[308px]">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-27 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <Input
                      className="!rounded-l-none border-neutral-400"
                      type="date"
                    />
                  </div>
                </div>
                <div>
                  <label>Correo</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="text-xl w-[16.7px] flex justify-center icon-envelope"></i>
                    </span>
                    <Input
                      type="email"
                      className="!rounded-l-none"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                {/* ---- */}
                <div>
                  <label>Código de descarga</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="text-xl w-[16.7px] flex justify-center las la-envelope"></i>
                    </span>
                    <Input
                      type="text"
                      className="!rounded-l-none"
                    />
                  </div>
                </div>
                {/* ---- */}
                <div>
                  <label>País</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-59 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <div className="relative inline-block max-w-[265px] w-full">
                      <select className="appearance-none py-2 pl-3 nc-Select h-[44px] max-w-[265px] !rounded-l-none border border-neutral-200 block w-full text-lg font-semibold rounded-2xl bg-[#fff] dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="1">Perú</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                          <path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Departamento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-40 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <div className="relative inline-block max-w-[265px] w-full">
                      <select className="appearance-none py-2 pl-3 nc-Select h-[44px] max-w-[265px] !rounded-l-none border border-neutral-200 block w-full text-lg font-semibold rounded-2xl bg-[#fff] dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="0">Seleccionar...</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                          <path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Provincia</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-40 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <div className="relative inline-block max-w-[265px] w-full">
                      <select className="appearance-none py-2 pl-3 nc-Select h-[44px] max-w-[265px] !rounded-l-none border border-neutral-200 block w-full text-lg font-semibold rounded-2xl bg-[#fff] dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="0">Seleccionar...</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                          <path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Distrito</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-40 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <div className="relative inline-block max-w-[265px] w-full">
                      <select className="appearance-none py-2 pl-3 nc-Select h-[44px] max-w-[265px] !rounded-l-none border border-neutral-200 block w-full text-lg font-semibold rounded-2xl bg-[#fff] dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
                        <option value="0">Seleccionar...</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                          <path stroke="#6b7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Dirección</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <svg  x="0px" y="0px" viewBox="0 0 32.041 32" style={{enableBackground: "new 0 0 32.041 32"}} width="18px" height="18px">
                        <g id="Layer_33">
                        	<path style={{ fill: "#1ab69d"}} d="M30,22v-4h-3.961l-2-2l-8.02,8L18,26c0,2.106,0,3.921,0,6c1,0,3,0,4,0c0-2,0-3.666,0-6h4v6   c1,0,3,0,4,0c0-2,0-3.666,0-6l2-2L30,22z"/>
                        	<path style={{fill:'#666666'}} d="M12.022,0h-0.002h-0.001C5.688,0.018,0.932,4.756,0.164,10.237C0.062,10.96,0,11.625,0,12.278   c-0.007,1.999,0.617,3.747,2.081,6.33C3.55,21.212,5.904,24.79,9.59,30.727l0.023,0.037L9.64,30.8c0.588,0.786,1.488,1.2,2.371,1.2   h0.01h0.01c0.883,0,1.783-0.414,2.37-1.2l0.026-0.035l0.023-0.037c0.806-1.298,1.548-2.484,2.232-3.572l-1.693-1.064   c-0.673,1.071-1.405,2.24-2.198,3.516c-0.2,0.259-0.475,0.382-0.771,0.39c-0.296-0.008-0.571-0.131-0.771-0.39   c-3.671-5.91-6.025-9.497-7.425-11.982C2.413,15.11,2.007,13.842,2,12.278c0-0.524,0.05-1.096,0.144-1.763   C2.783,5.981,6.739,2.004,12.02,2c5.281,0.004,9.237,3.981,9.875,8.515v0c0.094,0.667,0.144,1.239,0.144,1.763   c-0.001,0.706-0.087,1.33-0.299,2.043l1.916,0.574c0.267-0.886,0.384-1.739,0.383-2.616c0-0.653-0.062-1.318-0.164-2.041v0   C23.107,4.756,18.351,0.018,12.022,0z"/>
                        	<path style={{fill: "#666666"}} d="M8.039,12c0.002,2.208,1.792,3.998,4,4c2.208-0.002,3.998-1.792,4-4c-0.002-2.208-1.792-3.998-4-4   C9.831,8.002,8.041,9.792,8.039,12z M14.039,12c-0.002,1.1-0.9,1.998-2,2c-1.1-0.002-1.998-0.9-2-2c0.002-1.1,0.9-1.998,2-2   C13.14,10.002,14.038,10.9,14.039,12z"/>
                        	<rect x="0.041" style={{fill:"none"}} width="32" height="32"/>
                        </g>
                      </svg>
                    </span>
                    <Input
                      type="text"
                      className="!rounded-l-none"
                    />
                  </div>
                </div>

                {/* ---- */}

                <div>
                  <label>Celular</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-71 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <Input
                      type="text"
                      className="!rounded-l-none border-neutral-400"
                    />
                  </div>
                </div>
                <div>
                  <label>Ubigeo</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex h-[44px] items-center px-[12px] rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-lg">
                      <i className="icon-59 text-xl w-[16.7px] flex justify-center"></i>
                    </span>
                    <Input
                      type="text"
                      className="!rounded-l-none"
                    />
                  </div>
                </div>
              </div>
              {/* ---- */}
              <div className="pt-10 flex justify-center">
                <button className='cursor-pointer nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xl sm:text-lg font-semibold py-3 px-6 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-[--color-primary] dark:bg-slate-100 hover:bg-[#17a085] text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0'>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style_2={'footer-dark bg-image footer-style-2'} />
    </div>
  )
}

export default index