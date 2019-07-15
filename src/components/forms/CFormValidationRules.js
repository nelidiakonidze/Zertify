////
//  COURSE  //
////

export default function Cvalidate(inputs) {
  let errors = {};
  if (!inputs.courseName) {
    errors.courseName = 'required';
  }
  if (!inputs.courseHours) {
    errors.courseHours = 'required';
  }
  return errors;
}
