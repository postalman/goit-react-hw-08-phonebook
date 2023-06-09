import styled from 'styled-components';

export const RegisterContainer = styled.div`
  margin: 0;
  top: 50px;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  background-color: rgb( 33, 41, 66 );
  border-radius: 9px;
  border-top: 10px solid #79a6fe;
  border-bottom: 10px solid #8BD17C;
  width: 400px;
  height: 500px;
  box-shadow: 0px -1px 20px 5px rgb(25,31,53);
  margin-top: 150px;
`;

export const RegisterTitle = styled.h4`
  font-family: 'Source Sans Pro', sans-serif;
  color: #5c6bc0; 
  font-size: 18px;
  margin-top: 94px;
`;

export const RegisterForm = styled.form`
  h5 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 13px;
    color: #a1a4ad;
    letter-spacing: 1.5px;
    margin-top: -15px;
    margin-bottom: 70px;
  }
`;

export const RegisterLabel = styled.label`
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 320px;
  outline: none;
  color: #d6d6d6;
  transition: all .2s ease-out;

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: block;
    margin: 0;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: #d6d6d6;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
`;

export const RegisterInput = styled.input`
  &::placeholder {
    color: #565f79;
  }

  &:focus {
    border: 1px solid #79A6FE;
  }
`;

export const RegisterButton = styled.button`
  border: 0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  width: 340px;
  height: 49px;
  font-size: 16px;
  position: absolute;
  top: 79%;
  left: 8%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #5d33e6;
  }
`;