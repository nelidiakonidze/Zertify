export default function validate(inputs) {
  let errors = {};
  if (!inputs.studentName) {
    errors.studentName = 'name required';
  }
  if (!inputs.studentLastname) {
    errors.studentLastname = 'lastname required';
  }
  if (!inputs.courseName) {
    errors.courseName = 'course required';
  }
  if (!inputs.courseHours) {
    errors.courseHours = 'hours required';
  }
  return errors;
}
