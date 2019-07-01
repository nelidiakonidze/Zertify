////
//  STUDENT  //
////

import {useState, useEffect} from 'react';

// custom Hook

const useZForm = (initialValues, callback, validate) => {
  //set inital state
  const [inputs, setInputs] = useState({initialValues});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // reset form field to inital values (empty)
  const handleReset = () => {
    setInputs({...initialValues});
  };

  //after a change in the input value and isSubmitting true, check if the errors object contains keys
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      inputs.studentName !== '' &&
      inputs.studentLastname !== ''
    ) {
      //to post the form data to update the database
      const urlStudents = 'https://postgres-zertify-api.herokuapp.com/students';
      const Zconfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: inputs.studentName,
          last_name: inputs.studentLastname,
        }),
      };

      fetch(urlStudents, Zconfig)
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            alert(response.error);
          } else {
            callback();
            handleReset();
            console.log('new student added to db');
          }
        })
        .catch(event => {
          console.error(event);
          alert("Sorry, we're having trouble adding your new course");
        });
    }
  });

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(inputs));
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    handleReset,
    errors,
  };
};
export default useZForm;
