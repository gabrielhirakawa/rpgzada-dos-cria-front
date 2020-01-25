import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  img{
    height: 150px;
    margin-bottom: 30px;
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
  text-align: center;

  & + input {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  border: none;
  border-radius: 25px;
  padding: 10px 40px;
  background-color: #ffad33;

  &:hover {
    background-color: #ffd11a;
  }

  font-weight: bold;
`;
