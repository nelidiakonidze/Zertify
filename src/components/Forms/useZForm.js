import {useState, useEffect} from 'react';

// custom Hook

const useZForm = (initialValues, callback, validate) => {
  //set inital state
  const [inputs, setInputs] = useState({initialValues});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //after a change in the input value and isSubmitting true, check if the errors object contains keys
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      handleReset();
    }
  }, [errors]);

  // reset form field to inital values (empty)
  const handleReset = () => {
    setInputs({...initialValues});
  };

  const handleSubmit = event => {
    console.log('handle submit', inputs);
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
