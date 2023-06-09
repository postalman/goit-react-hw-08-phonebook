import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, RegisterTitle, RegisterForm, RegisterLabel, RegisterInput, RegisterButton } from './StyledRegister'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(userData));
    navigate('/login');
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>
          Name:
          <RegisterInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </RegisterLabel>
        <RegisterLabel>
          Email:
          <RegisterInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </RegisterLabel>
        <RegisterLabel>
          Password:
          <RegisterInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </RegisterLabel>
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
