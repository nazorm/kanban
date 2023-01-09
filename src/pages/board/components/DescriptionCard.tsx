import React, { useState } from 'react';
import styled from 'styled-components';
import moreIcon from '../../../assets/icons/more-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { Subtasks } from 'src/firebase/types';


export interface ICardDescriptionProps {
    cardTitle: string,
    cardDescription: string,
    status: string,
    subtasks?: Subtasks[];
}



export const DescriptionCard = (props: ICardDescriptionProps) => {
    const { cardTitle, cardDescription, status, subtasks } = props;
    const [isChecked, setIsChecked] = useState<string[]>([])

    const handleSubtaskCheck = (id: string) => {
        let checkedList = [];
        if (isChecked.includes(id)) {
            checkedList = isChecked.filter(
                (checkedId) => checkedId !== id
            );
            // setIsChecked(newCheckedList);
        } else {
            checkedList = [...isChecked, id]
            // setIsChecked([...isChecked, id]);
        }
        setIsChecked(checkedList);
    }

    return (
        <Box>
            <header className='header'>
                <h3>{cardTitle}</h3>
                <Image src={moreIcon} alt='more' width={30} height={15} />
            </header>
            <p className='description'>{cardDescription}</p>
            <SubtaskContainer>
                <h2 className='subtitle-heading'>Subtasks ({isChecked.length} of {subtasks?.length})</h2>
                <ul className='subtasks'>
                    {subtasks?.map((subtask) => {
                        return <li className='subtask' key={subtask._id}>
                            <input
                                type='checkbox'
                                onChange={() => handleSubtaskCheck(subtask._id!)}
                                //  checked={subtask.isCompleted} 
                                checked={isChecked.includes(subtask._id!)}
                            />
                            <span className={isChecked.includes(subtask._id!) ? 'completed-subtask subtask-text' : 'subtask-text'}>{subtask.title}</span>
                        </li>

                    })}

                </ul>
            </SubtaskContainer>
            <p>Status : {status}</p>
        </Box>
    )
}

const Box = styled.div`
  padding: 20px 50px;
  height: 370px;
  width: 480px;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .description{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
  }
`;

const SubtaskContainer = styled.div`
.subtitle-heading, .subtask-text{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
}
.subtasks{
  padding: 0;
    .subtask{
        text-align: start;
        padding: 10px;
        background-color:  ${StyleConstants.LIGHT_LILAC};
        border-radius: 4px;
        list-style: none;
        margin: 10px auto;
        .subtask-text{
            margin: 0 0 0 10px
        }
    }
    .completed-subtask{
        text-decoration: line-through;
    }
}
`;

export const customText = styled.span`
  font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
`;