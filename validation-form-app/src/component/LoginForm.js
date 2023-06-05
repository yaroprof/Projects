import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email"> E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          // value={email}
          // onChange={handleChange}
          // className={errors.email ? 'input-error' : ''}
        
        />
      </div>
    </form>
  );
};

export default LoginForm;
