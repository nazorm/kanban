import React, { useState } from "react";
import styled from "styled-components";
import { StyleConstants } from 'styles/StylesConstants';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import TextInput from '../../../components/Form/TextInput';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import eyeOpenIcon from 'src/assets/icons/open-eye-grey.svg';
import eyeClosedIcon from 'src/assets/icons/eye-slash.svg';
import Image from 'next/image';
import { Form, Right, Left, SignInBtn } from "../signup";
import firebase from 'src/firebase/firebaseConfig';
import {useAuth} from 'src/firebase/context';
interface ILoginScreenProps {
    email: string;
    password: string;
}

const passwordCondition = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*)")
const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required().matches(
        passwordCondition,
        'Password must include letters, numbers, characters and uppercase'),
})

const LoginScreen = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<ILoginScreenProps>({
        resolver: yupResolver(schema)
    })
    const router = useRouter();
const {signIn} = useAuth();

    const showPassword = () => {
        setIsPasswordShown(!isPasswordShown);
    }

    const renderPasswordIcon = () => {
        if (isPasswordShown) {
            return <Image src={eyeOpenIcon} alt='open eyelid' onClick={showPassword} />
        } else {
            return <Image src={eyeClosedIcon} alt='closed eyelid' onClick={showPassword} />
        }
    }

    const onSubmit: SubmitHandler<ILoginScreenProps> = data => {
        signIn(data)
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
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextInput {...field}
                            label="Email"
                            placeholder="johndoe@example.com"
                            error={errors?.email?.message}
                        />}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextInput {...field}
                            label="Password"
                            placeholder="password"
                            type={isPasswordShown ? 'text' : 'password'}
                            error={errors?.password?.message}
                            renderPasswordIcon={renderPasswordIcon}
                        />}
                    />
                    <LoginBtn>→</LoginBtn>
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
padding: 0 12% 0 15%;
justify-content: space-between;
align-items: center;
background-image: 
linear-gradient(
    to right, white, #e3e2f4 40%,  white 90%, #e3e2f4
    );
height: 100vh;
`;
const PageTitle = styled.h1`

`;

const LoginBtn = styled(SignInBtn)``;

const LoginForm = styled(Form)``;

const LoginLeft = styled(Left)``;

const LoginRight = styled(Right)``;
