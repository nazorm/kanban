import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';


interface IButton {
    content: string,
    className?: string;
    primaryBtnAction?: () => void;
    secondaryBtnAction?: () => void;
}

export const PrimaryButton = ({ content, className, primaryBtnAction }: IButton) => {
    return (
        <PrimaryBtn onClick={primaryBtnAction}>
            {content}
        </PrimaryBtn>
    )
}

export const TransparentButton = ({ content, className, secondaryBtnAction }: IButton) => {
    return (
        <TranparentBtn onClick={secondaryBtnAction}>
            {content}
        </TranparentBtn>
    )
}
export const PrimaryBtn = styled.button`
       border-radius: 4px;
        border: transparent;
        font-weight: bold;
        padding: 10px 20px;
        background-color: ${StyleConstants.ACCENT_COLOR};
       color: ${StyleConstants.WHITE_COLOR};;
       border-radius: 24px;
       &:hover{
        cursor: pointer;
       }
`;
const TranparentBtn = styled(PrimaryBtn)`
    color:   ${StyleConstants.ACCENT_COLOR};
    border: 2px solid  ${StyleConstants.ACCENT_COLOR};
    background-color: color: ${StyleConstants.WHITE_COLOR};;
    :hover{
      background-color:  ${StyleConstants.ACCENT_COLOR};
      color: color: ${StyleConstants.WHITE_COLOR};;
    }
`;