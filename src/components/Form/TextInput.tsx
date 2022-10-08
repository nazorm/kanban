import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';

interface ITextInputProps {
    label?: string,
    error?: string,
    handlePasswordIcon?: () => void,
    [x: string]: any;
}

 const TextInput = (props: ITextInputProps) => {
    const { label, name, error, handlePasswordIcon, ref, ...textInputProps } = props
    return (
        <Wrapper>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                placeholder=" "
                {...textInputProps}
                ref={ref}
                id={name}
                name={name}
            />
            <ErrorText>
                {error}
            </ErrorText>
        </Wrapper>
    )
}
export default TextInput;



const Wrapper = styled.div`
margin: 10px 0;
`;
const Input = styled.input`
    padding: 15px;
    display: block;
    border-radius: 8px;
    border: transparent;
    background-color: ${StyleConstants.LIGHT_LILAC};
    outline: 1px solid ${StyleConstants.LIGHT_LILAC};
    margin: 10px 0 20px;
    width: 80%;
`;
const Label = styled.label`
    font-size: 13px;
    font-weight: 700;
    transition: transform 200ms;
`;

const ErrorText = styled.span`
  display: block;
  color: red;
  margin-top: -15px;
  margin-bottom: 15px;

`;