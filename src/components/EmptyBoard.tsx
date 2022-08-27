import react from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './Button';
import { StyleConstants } from 'styles/StylesConstants';

export const EmptyBoard = () => {
    const addNewColumn = ()=>{
        console.log('done')
    }
    return (
        <Wrapper>
            <Card>
                <p className='text'>This board is empty. Create a new column to get started.</p>
                <PrimaryButton content={'+ Add New Column'} primaryBtnAction={addNewColumn} />
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;
const Card = styled.div`
text-align: center;
width: 100%;
align-self: center;
justify-self: center;
.text{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${StyleConstants. MEDIUM_GREY_COLOR};
}

`;