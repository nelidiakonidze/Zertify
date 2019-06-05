import React from 'react';
import ZSideNav from '../../components/ZSideNav';
import ZStudentTable from '../../components/ZStudentTable';
import ZFooter from '../../components/ZFooter';

const ZStudentsPage = () => {
  return (
    <div>
      <ZSideNav />
      <section className='flex-students'>
        <ZStudentTable />
        <ZFooter />
      </section>
    </div>
  );
};

export default ZStudentsPage;
