import React from 'react';
import Head from "next/head";
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../assets/icons/logo-dark.svg';
import Link from 'next/link';

const HomePage = () => {
    return (
        <Wrapper>
            <Head>
                <title>Home- Kanban</title>
                <meta name="description" content="A Project Management Board" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <Link href="/home">
                    <Image src={logo} alt='logo' />
                </Link>

                <nav>
                    <button>Login</button>
                    <button>Get Started</button>
                </nav>
            </Header>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 100%;
`;
const Header = styled.div`
  display: flex;
  border: 1px solid green;
`
export default HomePage;