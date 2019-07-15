import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZStudentTable from '../../components/lists/ZStudentTable';
import ZFooter from '../../components/layout/ZFooter';
import './ZStudentsPage.css';

const ZStudentsPage = ({listStudents, selectStudent, deleteOnClick}) => {
  return (
    <React.Fragment>
      <ZSideNav />
      <section className='flex-students'>
        <ZStudentTable
          listStudents={listStudents}
          selectStudent={selectStudent}
          deleteOnClick={deleteOnClick}
        />
        <ZFooter />
      </section>
    </React.Fragment>
  );
};

export default ZStudentsPage;
