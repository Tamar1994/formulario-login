import { InputContainer, InputStyled, ErrorText, ContainerColumn } from "./styles";
import { IinputProps } from "./types";
import { Controller } from "react-hook-form"

const Input = ({name, control, errorMessage, ...rest} : IinputProps) => {
    return (
        <ContainerColumn>
        <InputContainer>
            <Controller 
            name={name}
            control={control}   
            rules={{required: true}}
            render={({field: {onBlur, onChange}}) => <InputStyled onBlur={onBlur} onChange={onChange} {...rest}/>}
            />
        </InputContainer>
        {errorMessage ? <ErrorText> {errorMessage} </ErrorText> : null}
        </ContainerColumn>
    )
}

export { Input }