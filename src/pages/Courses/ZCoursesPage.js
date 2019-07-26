import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZCourseTable from '../../components/lists/ZCourseTable';
import ZFooter from '../../components/layout/ZFooter';
import './ZCoursesPage.css';

const ZCoursesPage = ({listCourses}) => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-courses'>
        <ZCourseTable listCourses={listCourses} />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZCoursesPage;
