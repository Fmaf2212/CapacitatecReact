import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetails2Main from '../../components/course-details-2';
import { course_data } from '../../data';

const course = course_data[0];

const CourseDetails2 = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
            <CourseDetails2Main course={course} />
        </Wrapper>
    )
}

export default CourseDetails2;