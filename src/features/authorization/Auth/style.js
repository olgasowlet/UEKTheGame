import styled from "styled-components";

export const Div = styled.div`
    width: 800px;
    margin: 150px auto 200px;
    background-color: ${(({theme}) => theme.color.white)};
    text-align: center;
    padding: 30px;
    box-shadow: 0 0 20px ${(({theme}) => theme.color.mercury)};
    font-size: 24px;
    color: ${(({theme}) => theme.color.mineshaft)};
`;

export const Title = styled.p`
    color: ${(({theme}) => theme.color.green)};
    font-size: 64px;
    font-weight: bold;
    margin: 10px 10px 30px 10px;
`;

export const Button = styled.button`
    background-color: ${(({theme}) => theme.color.green)};
    color: ${(({theme}) => theme.color.white)};
    border-radius: 65px;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 45px;
    border: none;
    margin-top: 40px;
    transition: opacity 1s, transform 0.5s;

    &:hover{
        opacity: 0.7;
        transform: scale(1.1);
    }
`;
