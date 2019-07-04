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
  // if (!inputs.courseId) {
  //   errors.courseId = 'required course id';
  // }
  return errors;
}
