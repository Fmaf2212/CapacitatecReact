import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../../components/seo';
import { course_data } from '../../data';
import { Wrapper } from '../../layout';
import CourseDetails2Main from '../../components/course-details-2';

const DynamicCourseDetails2 = () => {
    const router = useRouter();
    const { id } = router.query;
    const course = course_data.find(item => Number(item.id) === Number(id))
    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
            <CourseDetails2Main course={course} />
        </Wrapper>
    )
}

export default DynamicCourseDetails2;

export async function getStaticPaths() {
    const paths = course_data.map((course) => {
        return {
            params:{
                id:`${course.id}`
            }
        }
    })
    return {
      paths,
      fallback: false,
    }
  }

export async function getStaticProps(context) {
    return {
        props: {}
    }
}