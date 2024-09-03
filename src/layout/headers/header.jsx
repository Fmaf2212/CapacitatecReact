import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';
import AvatarDropdown from './AvatarDropdown';
import menu_data from './menu-data';

import { useCounterStore } from "../../store/auth";

const categories = [
  { link: '/course-style-1', title: 'Design' },
  { link: '/course-style-1', title: 'Development' },
  { link: '/course-style-1', title: 'Architecture' },
  { link: '/course-style-1', title: 'Life Style' },
  { link: '/course-style-1', title: 'Data Science' },
  { link: '/course-style-1', title: 'Marketing' },
  { link: '/course-style-1', title: 'Music' },
  { link: '/course-style-1', title: 'Photography' },
  { link: '/course-style-1', title: 'Finance' },
  { link: '/course-style-1', title: 'Motivation' }
]

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
  const handleLogout = useCounterStore((state) => state.handleLogout);
  // const isLoggedIn = useCounterStore((state) => state.isLoggedIn);
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const wishlists = useSelector(wishlistItems);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const userDataForAvatarDropdown = useCounterStore((state) => state.userDataForAvatarDropdown);
  const [userData, setUserData] = useState({ names: '', lastName: '' });

  useEffect(() => {
    // Este código se ejecuta solo en el cliente
    const userAuth = localStorage.getItem('USER_AUTH');
    if (userAuth) {
      setIsLoggedIn(true);
      const userDataForAvatarDropdown = JSON.parse(userAuth);
      setUserData({
        names: userDataForAvatarDropdown.names,
        lastName: userDataForAvatarDropdown.lastName
      });
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  return (
    <>
      <header className={`edu-header header-style-${header_style ? header_style : '1'} ${disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth'} ${no_top_bar ? 'no-topbar' : ''}`}>
        {!no_top_bar &&
          <div className="header-top-bar">
            <div className="container-fluid">
              <div className="header-top">
                <div className="header-top-left">
                  {/* <HeaderTopLeft /> */}
                </div>
                <div className="header-top-right">
                  <HeaderTopRight />
                </div>
              </div>
            </div>
          </div>
        }
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href={'/'}>
                    <img className="logo-light" src='/assets/images/logo/logo-dark.png' alt="logo" />
                    <img className="logo-dark" src='/assets/images/logo/logo-white.png' alt="logo" />
                  </Link>
                </div>

                {!disable_category &&
                  <div className="header-category hidden">
                    <nav className="mainmenu-nav">
                      <ul className="mainmenu">
                        <li className="has-droupdown">
                          <a href="#"><i className="icon-1"></i>Category</a>
                          <ul className="submenu">
                            {
                              categories.map((category, i) => (
                                <li key={i}>
                                  <Link href={`${category.link}`}>{category.title}</Link>
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                }
              </div>
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  {/* main menu start */}
                  <MainMenu />
                  {/* main menu end */}
                </nav>
              </div>
              <div className="header-right">
                <ul className="header-action">
                  {/* <li className="search-bar">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search" />
                      <button className="search-btn" type="button">
                        <i className="icon-2 font-extrabold"></i>
                      </button>
                    </div>
                  </li> */}
                  {/* <li className="icon search-icon">
                    <a style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                      <i className="icon-2 font-extrabold"></i>
                    </a>
                  </li> */}
                  <li className="icon has-droupdown w-[62px] p-0">
                    <a href="#" className='flex justify-center items-center'><i className="icon-25"></i></a>
                    <ul className="submenu py-7 px-6">
                      <li>
                        <div className="flex flex-col items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="48px" height="48px" viewBox="0 0 368.000000 368.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,368.000000) scale(0.100000,-0.100000)" fill="#0d9488" stroke="none">
                              <path d="M1694 3669 c-895 -65 -1619 -796 -1683 -1701 -72 -1009 691 -1886 1702 -1957 1007 -72 1885 692 1956 1701 46 645 -252 1265 -789 1640 -183 128 -456 243 -679 288 -87 17 -350 43 -386 38 -5 0 -60 -4 -121 -9z m324 -120 c577 -63 1084 -410 1346 -919 220 -429 255 -905 99 -1353 -31 -92 -113 -268 -151 -325 l-15 -23 -64 70 c-227 249 -574 453 -923 541 -279 70 -636 69 -923 -4 -360 -92 -711 -307 -951 -584 -45 -53 -40 -58 -126 110 -253 491 -253 1058 1 1558 321 632 1008 1006 1707 929z"></path>
                              <path d="M1684 3121 c-295 -80 -489 -346 -471 -646 10 -154 62 -276 169 -391 77 -82 152 -131 258 -168 76 -27 98 -30 200 -30 102 0 124 3 200 30 106 37 181 86 258 168 70 75 112 145 144 241 32 98 33 269 1 370 -61 193 -221 355 -413 416 -95 31 -253 35 -346 10z"></path>
                            </g>
                          </svg>
                        <div className="flex flex-col items-center gap-2 ml-0">
                          <h4 className="font-semibold text-center mb-0">{userData.names} {userData.lastName}</h4>
                          <p className='text-sm mb-0'>Rango: <span className='font-[500]'>Doble Diamante</span></p>
                          <p className='text-sm mb-0'>Puntos: <span className='font-[500]'>40 ptos.</span></p>
                        </div>
                      </div>
                      </li>
                      <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
                      <li>
                        <Link href={`/edit-profile`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                          Mi perfil
                        </Link>
                      </li>
                      <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
                      <li>
                        <Link href={`/`}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 64 64" stroke="currentColor" fill="none" >
  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M63.69172,44.81383c-0.62661-1.75697-1.91092-3.12349-3.61652-3.87351s-3.5858-0.7603-5.30169-0.03085L43.2661,45.76935 c0.01028-0.13358,0.02057-0.28772,0.02057-0.43158c0-2.23984-1.81861-4.05838-4.05851-4.05838h-8.30176 c-0.33914,0-0.66787-0.07193-0.97603-0.21579l-7.03815-3.17485c-1.09932-0.50344-2.32205-0.77059-3.53437-0.77059h-5.95927 v-0.57537c0-1.13017-0.91432-2.0549-2.0549-2.0549H0v25.93287h11.36368c1.14058,0,2.0549-0.92467,2.0549-2.0549v-1.61304h3.29808 l12.27812,3.94538c1.01717,0.31851,2.06519,0.48294,3.12337,0.48294c1.66459,0,3.32893-0.40072,4.80853-1.19188L64,45.64606 L63.69172,44.81383z M7.22301,56.60895c-0.79116,0-1.43833-0.6473-1.43833-1.43846c0-0.80138,0.64717-1.44868,1.43833-1.44868 s1.43846,0.6473,1.43846,1.44868C8.66147,55.96165,8.01417,56.60895,7.22301,56.60895z M35.97109,58.1707 c-1.94178,1.03767-4.25354,1.23289-6.34958,0.56508l-12.43214-3.9968l-3.77079-0.04108V39.17307h5.95927 c0.92461,0,1.84946,0.2055,2.68163,0.58566l7.03802,3.18514c0.57543,0.25686,1.19188,0.39043,1.82889,0.39043h8.30176 c1.1096,0,2.0036,0.9041,2.0036,2.00348c0,1.10966-0.894,2.00354-2.0036,2.00354h-10.7471v2.0549h10.7471 c0.75014,0,1.44874-0.19522,2.04474-0.5548L55.57495,42.8c1.19175-0.50344,2.49664-0.49316,3.67836,0.02057 c0.90404,0.40066,1.64377,1.05824,2.13693,1.89048L35.97109,58.1707z"></path>
  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9.30727,30.34497l6.39875-3.54516l6.26605,3.77493l-1.39431-7.18112l4.59757-3.98721l-1.69745,7.31326 c-0.09231,0.39533,0.05719,0.80771,0.38128,1.05254c0.32509,0.24482,0.76156,0.27542,1.11675,0.07826l7.1129-3.93973 l6.96339,4.19509c0.33587,0.20422,0.7768,0.20085,1.11876-0.03813c0.33212-0.23228,0.49667-0.63915,0.41941-1.03749 l-1.54921-7.98131l0.14624-0.12686l4.60622,4.29712l-1.65393,7.12581l6.39875-3.54516l6.26593,3.77493l-1.39418-7.18112 l5.52631-4.79279l-7.26039-0.893l-2.85057-6.73701l-3.09289,6.62914l-5.57573,0.4813l5.02689-4.35927 c0.30703-0.26589,0.42744-0.68731,0.30904-1.07561c-0.1184-0.3883-0.45353-0.67075-0.85688-0.72042l-8.07011-0.99233 L33.3982,3.44598c-0.15853-0.37376-0.52175-0.61958-0.92712-0.62711c-0.00702,0-0.01304,0-0.01906,0 c-0.39834,0-0.76256,0.23078-0.93113,0.59299l-3.43755,7.36775l-8.10021,0.69935c-0.88109,0.07543-1.26465,1.16423-0.61306,1.77496 l5.58025,5.20499l-6.10664-0.75109l-2.85045-6.73701l-3.09289,6.62914L5.6121,18.22908l5.34897,4.99008L9.30727,30.34497z M28.85192,12.77583c0.36623-0.03161,0.68731-0.25586,0.84283-0.58898l2.71111-5.81203l2.49939,5.90634 c0.14348,0.33864,0.45654,0.57443,0.82076,0.61958l6.36538,0.78263l-4.84528,4.20212 c-0.27794,0.24081-0.40536,0.61105-0.33512,0.97176l1.2221,6.29615l-5.49345-3.30912 c-0.31649-0.19146-0.71086-0.19536-1.02745-0.01856l-5.61085,3.10794l1.44987-6.24749 c0.08328-0.3577-0.03111-0.73296-0.29901-0.9838l-4.69076-4.3752L28.85192,12.77583z"></path>
</svg>
                          Mis Puntos
                        </Link>
                      </li>
                      <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
                      {isLoggedIn && (
                        <li>
                          <button
                            type="button"
                            className="flex items-center font-['Spartan'] transition duration-150 ease-in-out rounded-lg bg-white h-[35px] hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 leading-[1.8] font-semibold text-[15px] text-black gap-[20px] m-0 p-0"
                            onClick={handleLogout}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z" fill="currentColor"></path><path d="M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z" fill="currentColor"></path><path d="M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z" fill="currentColor"></path></svg>
                            Cerrar Sesión
                          </button>
                        </li>
                      )}
                      {!isLoggedIn && (
                        <li>
                          <a href="/sign-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="currentColor"></path></svg>
                            Login
                          </a>
                        </li>
                      )}
                    </ul>
                    {/* <AvatarDropdown /> */}
                  </li>
                  {/* <li className="icon">
                    <Link href="/wishlist" className='wishlist'>
                      <i className="icon-22 font-extrabold"></i>
                      <span className="count">{wishlists?.length}</span>
                    </Link>
                  </li> */}
                  <li className="icon cart-icon">
                    <Link href="/cart" className='cart-icon'>
                      <i className="icon-3 font-extrabold"></i>
                      <span className="count">{quantity}</span>
                    </Link>
                    <Cart />
                  </li>
                  {/* <li className="header-btn">
                                        <Link href="/contact-us">
                                            <a className="edu-btn btn-medium">Try for free
                                            <i className="icon-4"></i></a>
                                        </Link>
                                    </li> */}
                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  )
}

export default Header;