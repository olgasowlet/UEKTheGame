import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr;
    align-items: center;
`;

export const Label = styled.label`
    margin: 15px;
    justify-self: end;

    @media (max-width: ${(({ theme }) => theme.size.mobile_y)}) {
        margin: 2px;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${(({ theme }) => theme.color.white)};
    border-radius: 25px;
    background-color: ${(({ theme }) => theme.color.mercury)};
    height: 37px;
    justify-self: start;

    @media (max-width: ${(({ theme }) => theme.size.mobile_y)}) {
        width: 150px;
    }
`;

export const SpanError = styled.span`
    font-size: 12px;
    color: red;
    grid-column: 2;
    justify-self: start;
    padding-left: 20px;
`;