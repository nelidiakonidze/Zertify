import React from 'react';
import ZSideNav from '../../ZSideNav';
import ZStudentTable from '../../ZStudentTable';
import ZFooter from '../../ZFooter';

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
