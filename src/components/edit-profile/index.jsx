import React, { useState } from 'react'
import Input from '../Input/Input'

const index = () => {
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPassword2, setShowNewPassword2] = useState(false);

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleShowNewPassword2 = () => {
    setShowNewPassword2(!showNewPassword2);
  };
  return (
    <div className={`nc-AccountPage`} data-nc-id="AccountPage">
      <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 flex justify-center sm:justify-start items-start">
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
            </div>
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 px-5 sm:px-0 max-w-3xl space-y-6">
              <div className="flex flex-col border border-slate-300 px-6 pb-6 pt-4 rounded-lg">
                <h1 className="block text-lg sm:text-xl lg:text-2xl font-semibold text-start pt-2">Cambiar contraseña</h1>
                <div className="flex flex-col gap-6 mt-4 items-start">
                  <div className="w-full">
                    <label htmlFor="current-password">Contraseña actual</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                        <i className="text-2xl las la-lock"></i>
                      </span>
                      <div className="relative w-full">
                        <Input
                          id="current-password"
                          // type={showCurrentPassword ? 'text' : 'password'}
                          type={'text'}
                          className="!rounded-l-none h-[44px] border-neutral-400 pl-4 pr-12"
                          // onChange={handleInputCurrentPassword}
                        />
                          <button
                            // onClick={toggleShowCurrentPassword}
                            type="button"
                            aria-label={'Mostrar contraseña'}
                            className="focus:outline-none absolute top-1/2 right-5 -translate-y-1/2"
                          >
                            {/* {showCurrentPassword ? (
                              <img src={iconEyeVisible} alt="Ocultar contraseña" width={24}/>
                            ) : (
                              <img src={iconEyeInvisible} alt="Mostrar contraseña" width={24}/>
                            )} */}
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="new-password">Contraseña nueva</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                        <i className="text-2xl las la-lock"></i>
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
                            className="focus:outline-none absolute top-1/2 right-5 -translate-y-1/2"
                          >
                            {/* {showNewPassword ? (
                              <img src={iconEyeVisible} alt="Ocultar contraseña" width={24}/>
                            ) : (
                              <img src={iconEyeInvisible} alt="Mostrar contraseña" width={24}/>
                            )} */}
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="new-password2">Repetir contraseña nueva</label>
                    <div className="mt-1.5 flex items-center">
                      <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                        <i className="text-2xl las la-lock"></i>
                      </span>
                      <div className="relative w-full">
                        <Input
                          id="new-password2"
                          // type={showNewPassword2 ? 'text' : 'password'}
                          type={'password'}
                          className="!rounded-l-none h-[44px] border-neutral-400 pl-4 pr-12"
                          // value={inputNewPassword2Value}
                          // onChange={handleInputNewPassword2Value}
                        />
                          <button
                            onClick={toggleShowNewPassword2}
                            type="button"
                            // aria-label={showCurrentPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            className="focus:outline-none absolute top-1/2 right-5 -translate-y-1/2"
                          >
                            {/* {showNewPassword2 ? (
                              <img src={iconEyeVisible} alt="Ocultar contraseña" width={24}/>
                            ) : (
                              <img src={iconEyeInvisible} alt="Mostrar contraseña" width={24}/>
                            )} */}
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <button className="border border-slate-300 sm:h-[44px]"><p className="whitespace-nowrap">Cambiar contraseña</p></button>
                  </div>
                </div>
              </div>
              <div className=" border border-slate-300 dark:border-neutral-700 px-6 pb-10 pt-4 rounded-lg space-y-6">
                <h1 className="block text-lg sm:text-xl lg:text-2xl font-semibold text-start pt-2">Editar datos de usuarios</h1>
                <div>
                  <label>Tipo de documento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-address-card"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px] border-neutral-400">
                      <option value="">Seleccionar...</option>
                      <option value="DNI">DNI</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Documento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-id-card"></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400"/>
                  </div>
                </div>
                <div>
                  <label>Nombres</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-user"></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400"/>
                  </div>
                </div>
                <div>
                  <label>Apellidos</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-user"></i>
                    </span>
                    <Input type="text" className="!rounded-l-none h-[44px] border-neutral-400" />
                  </div>
                </div>
                <div className="max-w-lg">
                  <label>Fecha de Nacimiento</label>
                  <div className="mt-1.5 flex w-full max-w-[308px]">
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-calendar"></i>
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
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-envelope"></i>
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
                  <label>Nombre de Reconocimiento</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-envelope"></i>
                    </span>
                    <Input
                      type="text"
                      className="!rounded-l-none"
                    />
                  </div>
                </div>
                <div>
                  <label>Mayorista Preferente</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-envelope"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px]">
                      <option value="0">Seleccionar...</option>
                      
                    </select>
                  </div>
                </div>
                {/* ---- */}
                <div>
                  <label>País</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-globe"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px]">
                      <option value="1">Perú</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Departamento</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-city"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px]" >
                      <option value="0">Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Provincia</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-building"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px]">
                      <option value="0">Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Distrito</label>
                  <div className="mt-1.5 flex items-center">
                    <span className="inline-flex h-[44px] items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-home"></i>
                    </span>
                    <select className="max-w-[265px] !rounded-l-none h-[44px]">
                      <option value="0">Seleccionar...</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Dirección</label>
                  <div className="mt-1.5 flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-map-signs"></i>
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
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-phone-volume"></i>
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
                    <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                      <i className="text-2xl las la-map"></i>
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
                <button>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index