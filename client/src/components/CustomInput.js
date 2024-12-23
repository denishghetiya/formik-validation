import React from 'react';
import { ErrorMessage, useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapper">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={`text-input ${meta.touched && meta.error && 'input-error'}`} {...field} {...props} />
      <ErrorMessage name={props.name} component="div" className="error" />
    </div>
  );
};

export default CustomInput;
