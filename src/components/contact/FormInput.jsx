import React from 'react';

const FormInput = ({ type = 'text', name, value, onChange, placeholder, rows }) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="form-group">
      <InputComponent
        type={!isTextarea ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="form-input"
        rows={rows}
      />
      <div className="input-highlight"></div>
    </div>
  );
};

export default FormInput; 