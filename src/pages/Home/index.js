import React, { useEffect, useState } from 'react';

import { Container, ButtonLoggout, Cards, CardItem, Content } from './styles';

import ficha from '../../assets/icons/ficha.png';
import beast from '../../assets/icons/beast.png';
import skills from '../../assets/icons/skills.png';
import sword from '../../assets/icons/sword.png';

export default function Home({ history }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        const user = localStorage.getItem("user")
        setUser(user);
    }, []);

    async function loggout() {
        localStorage.clear();
        history.push('/');
    }
    return (
        <Container>
            <Content>
            <h1>Bem vindo <span>{user.toUpperCase()}</span>!</h1>
            <Cards>
                <CardItem>
                    <img src={ficha} alt="fichas" />
                    <span>Fichas</span>
                </CardItem>
                <CardItem>
                    <img src={beast} alt="monstros" />
                    <span>Monstros</span>
                </CardItem>
                <CardItem>
                    <img src={skills} alt="habilidades" />
                    <span>Habilidades</span>
                </CardItem>
                <CardItem>
                    <img src={sword} alt="itens" />
                    <span>Itens</span>
                </CardItem>
            </Cards>
            </Content>
            <ButtonLoggout type="button" onClick={loggout}>Sair</ButtonLoggout>
        </Container>
    )
}