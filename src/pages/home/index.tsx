import React, { useState, useEffect } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../assets/icons/logo-dark.svg';
import Link from 'next/link';
import EmptyBoard from '../board/components/EmptyBoard';
import { SideBar } from 'src/components/Layout/Sidebar';
import { BoardHeader } from 'src/components/Layout/BoardHeader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { getAllBoards } from "../../../store/landingSlice/call";

const HomePage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        getAllBoards(dispatch, setLoading);
    },[])
    return (
        <Wrapper>
            <Head>
                <title>Home- Kanban</title>
                <meta name="description" content="A Project Management Board" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <BoardHeader />
            <Container>
                <SideBar />
                <EmptyBoard param= 'board' />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
`;
const Header = styled.div`
  display: flex;
  border: 1px solid green;
`;
const Container = styled.div`
    display: flex;
`
export default HomePage;