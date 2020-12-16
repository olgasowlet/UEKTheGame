import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

export const Label = styled.label`
    margin: 15px;
`;

export const Input = styled.input`
    margin-left: 30px;
    padding: 10px;
    border: 1px solid ${(({theme}) => theme.color.white)};
    border-radius: 25px;
    background-color: ${(({theme}) => theme.color.mercury)};
    height: 37px;
`;

export const SpanError = styled.span`
    font-size: 12px;
    color: red;
    grid-column: 2;
`;