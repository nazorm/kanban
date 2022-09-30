import React, { FunctionComponent } from "react";
import { PrimaryBtn, Regbutton } from "src/components/Button";
import styled from "styled-components";
import { StyleConstants } from 'styles/StylesConstants';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";

interface ISignUpScreenProps {

}

const SignUpScreen = () => {
    const router = useRouter();
    const handleSignup = (e) => {
        e.preventDefault();
        router.push('/board')
    }
    return (
        <Container>
            <Head>
                <title>Register - Kanban</title>
                <meta name="description" content="A Project Management Board" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <Left>


                <PageTitle>
                    Register
                </PageTitle>
                <Form>
                    <label htmlFor="name" className="label">
                        Full Name
                    </label>
                    <FormInput
                        type='text'
                        placeholder="John Doe"

                    />
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <FormInput
                        type='email'
                        placeholder="johndoe@example.com"

                    />
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <FormInput
                        type='password'
                        placeholder="password"
                    />
                    <SignInBtn onClick={handleSignup}>→</SignInBtn>
                </Form>
                <span className="notice">Already have an account? <Link href={'/auth/login'} style={{ color: '#8471F2' }}>Sign In</Link></span>
            </Left>
            <Right>
                <h3 className="catchphrase">Take organizing to the next Level</h3>
                <div className="circle">
                    <p>Kanban</p>
                </div>
                <div className="circle-shadow"></div>
            </Right>
        </Container>
    );
}

export default SignUpScreen;
export const Input = styled.input`
padding: 15px;
display: block;
border-radius: 8px;
border: transparent;
background-color: ${StyleConstants.LIGHT_LILAC};
outline: 1px solid ${StyleConstants.LIGHT_LILAC};
margin: 10px 0 20px;
width: 80%;
`;
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

const FormInput = styled(Input)`
    
`;
export const SignInBtn = styled(PrimaryBtn)`
    width: 45px;
    height: 45px;
    border-radius: 8px;
    margin: 30px 0;
    padding: 10px;
    
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 0 20px;
    .label{
        font-size: 13px;
        font-weight: 700;
    }
`;
export const Left = styled.div`
    width: 50%;
    padding: 20px;
    .notice{
        font-size: 13px;
    }
`;
export const Right = styled.div`
    width: 30%;
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .catchphrase{
        position: absolute;
        top: 0;
    }
    .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Leckerli One', cursive;
        color:  ${StyleConstants.WHITE_COLOR};
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: ${StyleConstants.ACCENT_COLOR};
        position: absolute;
        animation: bounce 5s linear infinite;
    }
@keyframes bounce{
    0%{
        bottom: 3%;
    }
    50%{
        bottom: 10%;
    }
    100%{
        bottom: 3%;
    }
}
.circle-shadow{
    position: absolute;
    bottom: 0;
    background-color: #afaeae7d;
    height: 10px;
    width: 65px;
    border-radius: 50%;
    animation: shrink 5s infinite;

    @keyframes shrink{
50%{
    transform: scaleX(0.5);
}
    }

}
`;
