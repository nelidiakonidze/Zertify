import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZStudentTable from '../../components/ZStudentTable';
import ZFooter from '../../components/layout/ZFooter';
import './ZStudentsPage.css';

const ZStudentsPage = ({listStudents}) => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-students'>
        {/* getting state from app.js and then passing it to StudentTable */}
        <ZStudentTable listStudents={listStudents} />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZStudentsPage;
