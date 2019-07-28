////
//  COURSE  //
////
import {useState, useEffect} from 'react';

// custom Hook
const useZForm = (initialValues, callback, validate) => {
  //set inital state
  const [inputs, setInputs] = useState({initialValues});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(inputs));
  };

  // reset form field to inital values
  const handleReset = () => {
    setInputs({...initialValues});
  };

  //after a change in the input value and isSubmitting true, check if the error object contains keys
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      inputs.courseName !== '' &&
      inputs.courseHours !== ''
    ) {
      //to post the form data to update the database
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

      fetch(urlCourses, Zconfig)
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            alert(response.error);
          } else {
            callback();
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
