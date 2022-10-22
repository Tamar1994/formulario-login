import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    height: 30px;
    border: 2px solid #4f80ac;
    background-color: rgba(79,128,172,0.3);
    font-family: 'Open Sans';
    display: flex;
    align-itens: center;
    justify-content: flex-start;
    border-radius: 12px;
`

export const ContainerColumn = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const InputStyled = styled.input `
    border: none;
    width: 100%;
    background-color: transparent;
    padding-left: 5px;

    &:focus {
        outline: none;
    }

`


export const ErrorText = styled.p `
    color: #FF0000;
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 700;
`