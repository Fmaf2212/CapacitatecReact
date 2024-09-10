import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import SignInArea from './sign-in-area';
import Loader from '../Loader';

const index = () => {
  return (
    <>
      <Loader />
      <div className='sticky-header'>
        <div id="main-wrapper" className="main-wrapper">
          <Header no_top_bar={true} />
          {/* <BreadcrumbThree title="My Account" subtitle="Account" /> */}
          <SignInArea />
          <Footer style_2={'footer-dark bg-image footer-style-2'} />
        </div>
      </div>
    </>
  )
}

export default index;