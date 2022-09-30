import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';


interface IButton {
    content: string,
    className?: string;
    primaryBtnAction?: (e:any) => void;
    secondaryBtnAction?: (e:any) => void;
    style?: React.CSSProperties;
}

export const PrimaryButton = ({ content, className, primaryBtnAction, style }: IButton) => {
    return (
        <PrimaryBtn onClick={primaryBtnAction}>
            {content}
        </PrimaryBtn>
    )
}

export const TransparentButton = ({ content, className, secondaryBtnAction, style }: IButton) => {
    return (
        <TranparentBtn onClick={secondaryBtnAction}>
            {content}
        </TranparentBtn>
    )
}

export const BorderlessButton = ({ content, className, primaryBtnAction, style }: IButton) => {
    return (
        <BorderlessBtn onClick={primaryBtnAction}>
            {content}
        </BorderlessBtn>
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
                background-color:  ${StyleConstants.PRIMARY_HOVER_COLOR};
        }
`;



const TranparentBtn = styled(PrimaryBtn)`
        color:   ${StyleConstants.ACCENT_COLOR};
        border: 1px solid  ${StyleConstants.LIGHT_LILAC};
        background-color: ${StyleConstants.LIGHT_LILAC};
        :hover{
            background-color:  ${StyleConstants.ACCENT_COLOR};
            color: ${StyleConstants.WHITE_COLOR};
        }
`;

const BorderlessBtn = styled.button`
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
    border: transparent;
    padding: 20px;
    background-color: transparent;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`;