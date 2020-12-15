import styled from "styled-components";

export const Div = styled.div`
    width: 800px;
    margin: 150px auto;
    background-color: ${(({theme}) => theme.color.white)};
    text-align: center;
    padding: 30px;
`;

export const Title = styled.p`
    color: ${(({theme}) => theme.color.green)};
    font-size: 64px;
    font-weight: bold;
    margin: 10px;
`;

export const Form = styled.form`
    font-size: 24px;
    color: ${(({theme}) => theme.color.mineshaft)};
    margin-top: 50px;
`;
