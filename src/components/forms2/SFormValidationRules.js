////
//  STUDENT  //
////

export default function Svalidate(inputs) {
  let errors = {};
  if (!inputs.studentName) {
    errors.studentName = 'required';
  }
  if (!inputs.studentLastname) {
    errors.studentLastname = 'required';
  }
  //   if (!inputs.courseName) {
  //     errors.courseName = 'required';
  //   }
  //   if (!inputs.courseHours) {
  //     errors.courseHours = 'required';
  //   }
  return errors;
}
