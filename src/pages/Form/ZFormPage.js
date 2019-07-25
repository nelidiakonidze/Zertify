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
        <h1>Add a new student or course to the database</h1>

        <section className='flex-main'>
          <h2>New course: </h2>
          <ZCourseForm />
          <h2>New student:</h2>
          <ZStudentForm listCourses={listCourses} />
        </section>
        <ZFooter />
      </section>
    </div>
  );
};

export default ZFormsPage;
