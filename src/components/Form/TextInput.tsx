import React from 'react';
import styled from 'styled-components';
import { customMedia } from 'styles/breakpoints';
import { StyleConstants } from 'styles/StylesConstants';

interface ITextInputProps {
    label?: string,
    error?: string,
    renderPasswordIcon?:() => React.ReactNode;
    [x: string]: any;
}

 const TextInput = (props: ITextInputProps) => {
    const { label, name, error, renderPasswordIcon, ...textInputProps } = props
    return (
        <Wrapper>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                placeholder=""
                {...textInputProps}
                id={name}
                name={name}
            />
             <InputIcon>{renderPasswordIcon && renderPasswordIcon()}</InputIcon>
            <ErrorText>
                {error}
            </ErrorText>
        </Wrapper>
    )
}
export default TextInput;



const Wrapper = styled.div`
margin: 10px 0;
position: relative;
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
    ${customMedia.lessThan("medium")`
      width: 100%;
  `};
`;
const Label = styled.label`
    font-size: 13px;
    font-weight: 700;
    transition: transform 200ms;
`;

export const ErrorText = styled.span`
  display: block;
  color: red;
  margin-top: -15px;
  margin-bottom: 15px;
`;
const InputIcon = styled.p`
  position: absolute;
  right: 25%;
  top: 10%;
  transform: translateY(80%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${customMedia.lessThan("medium")`
     right: 5%;
  `};

  svg {
    width: 20px;
    height: 20px;
  }
`;