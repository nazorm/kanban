import React, { FunctionComponent } from "react";
import { PrimaryBtn, Regbutton } from "src/components/Button";
import styled from "styled-components";
import { StyleConstants } from 'styles/StylesConstants';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";

import { Form, Input, Right, Left, SignInBtn } from "../signup";
interface ILoginScreenProps {

}

const LoginScreen = () => {
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        router.push('/board')
    }
    return (
        <Container>
            <Head>
                <title>Login - Kanban</title>
                <meta name="description" content="A Project Management Board" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <LoginLeft>


                <PageTitle>
                    Welcome back!
                </PageTitle>
                <LoginForm>
                    <label htmlFor="email">
                        Email
                    </label>
                    <FormInput
                        type='email'
                        placeholder="johndoe@example.com"

                    />
                    <label htmlFor="password">
                        Password
                    </label>
                    <FormInput
                        type='password'
                        placeholder="password"
                    />
                    <LoginBtn onClick={handleLogin}>→</LoginBtn>
                </LoginForm>
                <span className="notice">Don&apos;t have an account? <Link href={'/auth/signup'}>Sign Up</Link></span>
            </LoginLeft>
            <LoginRight>
                <h3 className="catchphrase">Take organizing to the next Level</h3>
                <div className="circle">
                    <p>Kanban</p>
                </div>
                <div className="circle-shadow"></div>
            </LoginRight>
        </Container>
    );
}

export default LoginScreen;

const Container = styled.div`
display: flex;
padding: 0 12% 0 5%;
justify-content: space-between;
align-items: center;
background-image: 
linear-gradient(
    to right, white, #e3e2f4 40%
    );
height: 100vh;
`;
const PageTitle = styled.h1`

`;
const FormInput = styled(Input)``;

const LoginBtn = styled(SignInBtn)``;

const LoginForm = styled(Form)``;

const LoginLeft = styled(Left)``;

const LoginRight = styled(Right)``;
