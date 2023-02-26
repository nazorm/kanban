import react, { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../../components/Button';
import { StyleConstants } from 'styles/StylesConstants';
import { Dialog } from '@mui/material';
import { AddEditBoard, AddEditCard } from '../../../components/AddEditCard';




const EmptyBoard = (props: { param: any; }) => {
    const {param} = props
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
                <p className='text'>Let&apos;s make this fun. Create a new board to get started.</p>
                <PrimaryButton content={param === 'task' ? '+ Add Task' : '+ Add New Board'} primaryBtnAction={addNewColumn} />
            </Card>
            <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
                {param === 'task' ? <AddEditCard  /> : <AddEditBoard boardParam = 'new' setIsViewTaskModalOpen={setIsViewTaskModalOpen} isViewTaskModalOpen={isViewTaskModalOpen}/>}

            </Dialog>
        </Wrapper>
    )
}
export default EmptyBoard;

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