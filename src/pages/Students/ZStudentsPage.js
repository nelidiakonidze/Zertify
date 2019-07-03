import React from 'react';
import ZSideNav from '../../components/layout/ZSideNav';
import ZStudentTable from '../../components/lists/ZStudentTable';
import ZFooter from '../../components/layout/ZFooter';
import './ZStudentsPage.css';

const ZStudentsPage = ({listStudents, onClickSelectBtn}) => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-students'>
        {/* getting state from app.js and then passing it to StudentTable */}
        <ZStudentTable listStudents={listStudents} onClickSelectBtn={onClickSelectBtn} />
        {/* <p>{JSON.stringify(listStudents)}</p> */}
        <ZFooter />
      </section>
    </div>
  );
};

export default ZStudentsPage;
