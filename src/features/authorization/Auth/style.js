import styled from "styled-components";

export const Div = styled.div`
    max-width: 800px;
    margin: 150px auto 200px;
    background-color: ${(({theme}) => theme.color.white)};
    text-align: center;
    padding: 30px;
    box-shadow: 0 0 20px ${(({theme}) => theme.color.mercury)};
    font-size: 1.3em;
    color: ${(({theme}) => theme.color.mineshaft)};

    @media (max-width: ${(({theme}) => theme.size.mobile_x)}) {
        max-width: 400px;
        font-size: 1em;
    };

    @media (max-width: ${(({theme}) => theme.size.tablet)}) {
        max-width: 700px;
    };
`;

export const Title = styled.p`
    color: ${(({theme}) => theme.color.green)};
    font-size: 3em;
    font-weight: bold;
    margin: 10px 10px 30px 10px;
`;

export const Button = styled.button`
    background-color: ${(({theme}) => theme.color.green)};
    color: ${(({theme}) => theme.color.white)};
    border-radius: 65px;
    font-size: 1.2em;
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
