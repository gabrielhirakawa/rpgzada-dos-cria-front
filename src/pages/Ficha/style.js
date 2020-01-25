import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    margin-bottom: 20px;
    color: #e3b04b;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  label {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  border-radius: 25px;
  border: none;
  padding: 10px 40px;
  font-size: 20px;
  margin: 10px;
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin: 10px;
  border: none;
  border-radius: 25px;
  padding: 10px 40px;
  background-color: #42dee1;
  margin-top: 50px;

  &:hover {
    background-color: #3fc5f0;
  }
`;

export const ComboBoxItem = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  align-items: center;

  select {
    font-size: 20px;
    width: 220px;
    border-radius: 25px;
    border: none;
    padding: 10px;
  }
`;

export const ComboBox = styled.div`
  display: flex;
`;
