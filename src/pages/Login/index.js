import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Input, Form, Content, Button } from "./styles";
import logo from '../../assets/logo.png';


export default function Login({ history }) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault();
    const response = await api.post('/sessions', { email: user, password }).catch(e => console.log('error login'));
    if (!response) {
      toast.error('Erro ao fazer login');
    }
    else {

      localStorage.setItem("token", response.data.token)
      toast.success('logado com sucesso!');
      history.push('/home');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home")
    }
  }, [])

  return (
    <Content>
      <img src={logo} alt="rpgzada dos cria" />
      <Form onSubmit={login}>
        <Input onChange={e => setUser(e.target.value)} placeholder="Usuário" />
        <Input onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
        <Button type="submit">ENTRAR!</Button>
      </Form>
    </Content>
  );
}
