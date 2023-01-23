import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from "next/head";
import { BoardHeader } from '../../components/Layout/BoardHeader';
import { SideBar } from 'src/components/Layout/Sidebar';
import { EmptyBoard } from './components/EmptyBoard';
import { ActiveBoard } from './components/ActiveBoard';
import { useRouter } from 'next/router';
import { getAllCurrentBoardTasks } from './slice/call';
import { useDispatch, useSelector } from 'react-redux';
import { currentBoardSelector } from './slice';
import { authStateSelector } from '../auth/slice';
import { Loader } from "src/components/Loader";

const Board = () => {
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const [loading, setLoading] = useState('false')
    const router = useRouter();
    const dispatch= useDispatch();
    const currentBoardList = useSelector(currentBoardSelector)
    const userAuthState = useSelector(authStateSelector);
    const boardId = router.query.boardId

    useEffect(() => {
        if (!loading && !userAuthState)
            router.push('/auth/login')
    }, [userAuthState, loading])

    useEffect(() => {
        getAllCurrentBoardTasks(boardId, dispatch, setLoading)
    }, [boardId])

    if (loading) {
        return <Loader/>
    }
    
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
                    {currentBoardList?.length === 0 ? <EmptyBoard param='task' /> : <ActiveBoard />}

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