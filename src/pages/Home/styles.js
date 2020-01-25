import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1{
        margin-top: 30px;
    }

    span{
        color: #C01717;
    }
`;

export const ButtonLoggout = styled.button`
    margin: 20px;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    color: #fff;
    background-color: #C01717;

    &:hover{
        background-color: #c35353;

    }
`;

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 30px 0;

`;

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 200px;
    width: 200px;
    background-color: #0059b3;
    border-radius: 4px;
    margin: 0px 10px;
    cursor: pointer;

    span{
        margin-top: 10px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
    }

    &:hover{
        background-color: #0080ff;
    }

`;