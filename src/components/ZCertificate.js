import React from 'react';
import './ZCertificate.css';

// TODO : create a route for this Certificate page

class ZCertificate extends React.Component {
  constructor() {
    super();
    const today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDay() + 2);
    this.state = {
      date: date,
    };
  }
  render() {
    return (
      <div className='flex-certificate'>
        <header>
          <img
            src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LWNQxQf-dm-dr94dDMj%2Favatar.png?generation=1547672003797954&alt=media'
            alt='Edera logo'
          />
        </header>
        <section className='side-certificate'>
          <h1>Certificate of completion</h1>
          <p>issued by EDERA on {this.state.date} </p>
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
  }
}

export default ZCertificate;
