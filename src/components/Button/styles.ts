import styled from "styled-components";

export const ButtonContainer = styled.button `
    width: 180px;
    height: 40px;
    font-family: 'Open Sans';
    font-size: 18px;
    background-color: #276195;
    color: #FFFFFF;
    border: none;
    border-radius: 25px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`