////
//  COURSE  //
////
import {useState, useEffect} from 'react';

// custom Hook
const useZForm = (initialValues, callback, validate) => {
  // set inital state
  const [inputs, setInputs] = useState({initialValues});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // update field value with the user input
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  // submit the form if there is no errors
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(inputs));
  };

  // reset form field to inital values
  const handleReset = () => {
    setInputs({...initialValues});
  };

  // after a change in the input value, check if the error object contains keys
  // if isSubmitting is true, if fields are not empty
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      inputs.courseName !== '' &&
      inputs.courseHours !== ''
    ) {
      // config to send the new course info to the database
      const urlCourses = 'https://zertify-server.herokuapp.com/api/courses';
      const Zconfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputs.courseName,
          hours: inputs.courseHours,
        }),
      };
      // send the new course info to the database
      fetch(urlCourses, Zconfig)
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            alert(response.error);
          } else {
            callback(); //alert message + update the courses list with the new course (frontend)
            handleReset();
          }
        })
        .catch(event => {
          alert("Sorry, we're having trouble adding your new course");
        });
    }
  });

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    handleReset,
    errors,
  };
};
export default useZForm;
