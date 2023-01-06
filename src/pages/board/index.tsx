import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Head from "next/head";
import { BoardHeader } from '../../components/Layout/BoardHeader';
import { SideBar } from 'src/components/Layout/Sidebar';
import { EmptyBoard } from './components/EmptyBoard';
import { ActiveBoard } from './components/ActiveBoard';
import { useAuth } from 'src/firebase/context';
import { useRouter } from 'next/router';

const boardList = [
    {id: 1,},
    {id:2,},
    {id:3,},
]

const Board = () => {
    const { authUser, loading } = useAuth();
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!loading && !authUser)
          router.push('/auth/login')
      }, [authUser, loading])
console.log('logged in user', authUser.userBoard)


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
                    {authUser.userBoard?.length === 0 ? <EmptyBoard/>  : <ActiveBoard/> }
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