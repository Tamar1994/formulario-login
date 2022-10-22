import { ButtonContainer } from "./styles"
import { IButtonProps } from "./types";

const Button = ({ title, handleOnClick} : IButtonProps) => {
    return (
        <ButtonContainer onClick={handleOnClick}>
            {title}
        </ButtonContainer>

    )
}

export  { Button };