import {useState} from 'react';

// custom Hook

const useZForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState({initialValues});

  const handleReset = () => {
    setInputs({...initialValues});
  };

  const handleSubmit = event => {
    console.log('handle submit');
    if (event) event.preventDefault();
    callback();
    handleReset();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    handleReset,
  };
};
export default useZForm;
