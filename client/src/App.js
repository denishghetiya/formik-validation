import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CustomInput from './components/CustomInput';
import './App.css';

const App = () => {
  const validateSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:5000/api/users', values);
      alert('User created successfully');
      resetForm();
    } catch (err) {
      console.error(err);
      alert('Failed to create user');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <CustomInput label="Name" name="name" type="text" />
          <CustomInput label="Email" name="email" type="email" />
          <CustomInput label="Password" name="password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
