import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 25px;
  border: none;
  padding: 10px 40px;

  & + input {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 25px;
  padding: 10px 40px;
  background-color: #42dee1;

  &:hover {
    background-color: #3fc5f0;
  }
`;
