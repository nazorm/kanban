import React, { useState } from "react";
import { PrimaryBtn } from "src/components/Button";
import styled from "styled-components";
import { StyleConstants } from 'styles/StylesConstants';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import TextInput from '@components/Form/TextInput';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import eyeOpenIcon from 'src/assets/icons/open-eye-grey.svg';
import eyeClosedIcon from 'src/assets/icons/eye-slash.svg';
import Image from 'next/image';
import { signUp } from "../slice/call";
import { useDispatch } from "react-redux";
import { Loader } from "src/components/Loader";

interface ISignUpScreenProps {
    uid?: string,
    fullName: string,
    password: string,
    email: string,
}
const passwordCondition = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*)")
const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required().matches(
        passwordCondition,
        'Password must include letters, numbers, characters and uppercase')
});

const SignUpScreen = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const router = useRouter();
    // const {signUp} = useAuth();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const { register, control, handleSubmit, formState: { errors, isDirty }, reset } = useForm<ISignUpScreenProps>(
        {
            resolver: yupResolver(schema)
        });



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

    const onSubmit: SubmitHandler<ISignUpScreenProps> = data => {
        signUp(data, router, setLoading, dispatch);
    }

    if (loading) {
        return <Loader/>
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="fullName"
                        control={control}
                        defaultValue=''
                        render={({ field }) => <TextInput {...field}
                            label="Full Name"
                            placeholder='John Doe'
                            error={errors?.fullName?.message}
                        />}
                    />
                    <Controller
                        name='email'
                        control={control}
                        defaultValue=''
                        render={({ field }) => <TextInput {...field}
                            placeholder="johndoe@example.com"
                            label="Email"
                            error={errors?.email?.message}
                        />}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=''
                        render={({ field }) => <TextInput {...field}
                            label="password"
                            type={isPasswordShown ? 'text' : 'password'}
                            placeholder='password'
                            error={errors?.password?.message}
                            renderPasswordIcon={renderPasswordIcon}
                        />}
                    />
                    <SignInBtn disabled={!isDirty}>→</SignInBtn>
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

const Container = styled.div`
    display: flex;
    padding: 0 12% 0 15%;
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

export const SignInBtn = styled(PrimaryBtn)`
    width: 45px;
    height: 45px;
    border-radius: 8px;
    margin: 30px 0;
    padding: 10px;
    &[disabled]{
     opacity: 0.5; 
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 0 20px;
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
        animation: bounce 9s linear infinite;
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
    animation: shrink 9s infinite;

    @keyframes shrink{
        50%{
            transform: scaleX(0.5);
        }
    }

}
`;
