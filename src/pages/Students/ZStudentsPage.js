import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZStudentTable from '../../components/lists/ZStudentTable';
import ZFooter from '../../components/layout/ZFooter';
import './ZStudentsPage.css';

const ZStudentsPage = ({listStudents, selectStudent}) => {
  return (
    <React.Fragment>
      <ZSideNav />
      <section className='flex-students'>
        <ZStudentTable
          listStudents={listStudents}
          selectStudent={selectStudent}
        />
        <ZFooter />
      </section>
    </React.Fragment>
  );
};

export default ZStudentsPage;
