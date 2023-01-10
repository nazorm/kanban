import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from "next/head";
import { BoardHeader } from '../../components/Layout/BoardHeader';
import { SideBar } from 'src/components/Layout/Sidebar';
import { EmptyBoard } from './components/EmptyBoard';
import { ActiveBoard } from './components/ActiveBoard';
import { useAuth } from 'src/api/context';
import { useRouter } from 'next/router';


const Board = () => {
    const { authUser, loading, getAllCurrentBoardTasks } = useAuth();
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const router = useRouter();
    const boardId = router.query.boardId
    useEffect(() => {
        if (!loading && !authUser)
            router.push('/auth/login')
    }, [authUser, loading])
    useEffect(() => {
        getAllCurrentBoardTasks(boardId)
    }, [boardId])

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
                    {authUser?.currentBoardTasks?.length === 0 ? <EmptyBoard param='task' /> : <ActiveBoard />}

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