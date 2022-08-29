import React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import { BoardHeader } from '../../components/Layout/BoardHeader';
import { SideBar } from 'src/components/Layout/Sidebar';
import { EmptyBoard } from 'src/components/EmptyBoard';
import { ActiveBoard } from './components/ActiveBoard';

const Board = () => {
    const boardList = [
        {id: 1,},
        {id:2,},
        {id:3,},
    ]
    return (
        <>
            <BoardHeader />
            <Wrapper>
                <Head>
                    <title>Board - Kanban</title>
                    <meta name="description" content="A Project Management Board" />
                    <link rel="icon" href="/favicon/favicon.ico" />
                </Head>
                <Container>
                    <SideBar />
                    {boardList.length === 0 ? <EmptyBoard/>  : <ActiveBoard/> }
                </Container>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.section`
    width: 100%;
`;
const Container = styled.div`
    display: flex;
`

export default Board;