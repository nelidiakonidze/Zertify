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
  if (!inputs.studentEmail) {
    errors.studentEmail = 'required';
  }
  return errors;
}
