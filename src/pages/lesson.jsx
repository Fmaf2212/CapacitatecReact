import React from 'react'
import Lesson from '../components/lesson';
import { Wrapper } from '../layout';
import SEO from '../components/seo';

const lesson = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Lesson'} />
      <Lesson />
    </Wrapper>
  )
}

export default lesson