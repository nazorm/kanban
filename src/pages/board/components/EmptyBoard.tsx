import react, { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../../components/Button';
import { StyleConstants } from 'styles/StylesConstants';
import {  Dialog } from '@mui/material';
import { AddEditCard } from './AddEditCard';
export const EmptyBoard = () => {

    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);

    const addNewColumn = () => {
        setIsViewTaskModalOpen(!isViewTaskModalOpen)
    }

    const handleViewTaskModal = () => {
        setIsViewTaskModalOpen(!isViewTaskModalOpen)
    }

    return (
        <Wrapper>
            <Card>
                <p className='text'>This board is empty. Create a new column to get started.</p>
                <PrimaryButton content={'+ Add New Column'} primaryBtnAction={addNewColumn} />
            </Card>
            <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
                <AddEditCard
                />
            </Dialog>
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
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
}

`;