import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, RegisterTitle, RegisterForm, RegisterLabel, RegisterInput, RegisterButton } from './StyledRegister'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));

    setEmail('');
    setPassword('');

    // navigate('/contacts');
  };

  
  return (
    <RegisterContainer>
      <RegisterTitle>Login</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>
          Email:
          <RegisterInput
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </RegisterLabel>
        <br />
        <RegisterLabel>
          Password:
          <RegisterInput
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </RegisterLabel>
        <br />
        <RegisterButton type="submit">Login</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Login;
