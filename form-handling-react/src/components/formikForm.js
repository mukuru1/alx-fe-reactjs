import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission
        console.log('Form values:', values);
        setSubmitting(false);
      }}
    >
      <Form>
        <Field name="username" type="text" placeholder="Username" />
        <ErrorMessage name="username" />
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" />
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;