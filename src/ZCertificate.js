import React from 'react';

// TODO : create a route for this Certificate page

const ZCertificate = props => {
  return (
    <div>
      <header>
        <img src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LWNQxQf-dm-dr94dDMj%2Favatar.png?generation=1547672003797954&alt=media' />
      </header>
      <section>
        <h1>Certificate of completion</h1>
        {/* create the function to display the date */}
        <p>issued by EDERA on </p>
        <p> states that</p>
        {/* pass the {student name } props here inside the h2 */}
        <h2> student name </h2>
        <p>has successfully completed the online course:</p>
        {/* pass the {course name } props here inside the h2 */}
        <h2>course name</h2>
        {/* pass the {course hours } props here inside the p */}
        <p> of X hours </p>
      </section>
    </div>
  );
};

export default ZCertificate;
