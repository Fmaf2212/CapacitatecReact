import React, { useState } from 'react';
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
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const wishlists = useSelector(wishlistItems);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
                  <div className="header-category">
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
                  <li className="search-bar">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search" />
                      <button className="search-btn" type="button">
                        <i className="icon-2 font-extrabold"></i>
                      </button>
                    </div>
                  </li>
                  <li className="icon search-icon">
                    <a style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                      <i className="icon-2 font-extrabold"></i>
                    </a>
                  </li>
                  <li className="icon has-droupdown w-[62px] p-0">
                    <a href="#" className='flex justify-center items-center'><i className="icon-25"></i></a>
                    <ul className="submenu rounded-3xl py-7 px-6">
                      <li>
                        <a href="/contact-us">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                          Mi perfil
                        </a>
                      </li>
                      <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
                      <li>
                        <a href="/contact-me">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z" fill="currentColor"></path><path d="M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z" fill="currentColor"></path><path d="M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z" fill="currentColor"></path></svg>
                          Cerrar Sesión
                        </a>
                      </li>
                    </ul>
                    {/* <AvatarDropdown /> */}
                  </li>
                  <li className="icon">
                    <Link href="/wishlist" className='wishlist'>
                      <i className="icon-22 font-extrabold"></i>
                      <span className="count">{wishlists?.length}</span>
                    </Link>
                  </li>
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