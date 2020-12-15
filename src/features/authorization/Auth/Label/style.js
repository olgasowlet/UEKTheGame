import styled from "styled-components";

export const Label = styled.label`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    margin-left: 30px;
    padding: 10px;
    border: 1px solid ${(({theme}) => theme.color.white)};
    border-radius: 25px;
    background-color: ${(({theme}) => theme.color.mercury)};
`;