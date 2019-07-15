import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZCourseForm from '../../components/forms/ZCourseForm';
import ZFooter from '../../components/layout/ZFooter';
import ZStudentForm from '../../components/forms/ZStudentForm';
import './ZFormsPage.css';

const ZFormsPage = ({listCourses}) => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-form'>
        <h2>Add a new course to the course list</h2>
        <ZCourseForm />
        <h2>Add a new student to the student list</h2>
        <ZStudentForm listCourses={listCourses} />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZFormsPage;
