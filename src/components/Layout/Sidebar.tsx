import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Image from 'next/image';
import { Switch } from '@mui/material';
import { StyleConstants } from 'styles/StylesConstants';
import boardIcon from '../../assets/icons/board-icon.svg';
import closeEyeIcon from '../../assets/icons/eye-slash.svg';
import openEyeIcon from '../../assets/icons/open-eye.svg';
import lightIcon from '../../assets/icons/light-icon.svg';
import darkIcon from '../../assets/icons/dark-icon.svg';
import { useAuth } from 'src/firebase/context';
interface ISideBarLinkProps {
    route: string;
    icon: any;
    title?: string;
}

export const SideBarLink = (props: ISideBarLinkProps) => {
    const { title, route, icon } = props;
    const router = useRouter();

    return (

        <li className={router.asPath.includes(route) ? "active-item" : "side-bar__item"}>
            <Link href={route} style={{ padding: '0' }}>
                <div className='open-sidebar'>
                    <Image src={icon} alt='icon' className='icon' />
                    <span className='sidebar-title'> {title}</span>
                </div>
            </Link>
        </li>


    )
}

export const SideBarIcon = (props: ISideBarLinkProps) => {
    const { route, icon } = props;
    const router = useRouter();
    return (
        <li className={router.asPath.includes(route) ? "closed-active-item" : "closed-side-bar__item"}>
            <Link href={route}>
                <div className='closed-sidebar'>
                    <Image src={icon} alt='icon' className='icon' width={20} height={20} />
                </div>
            </Link>
        </li>
    )

}

export const SideBar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const { signOut, authUser, loading, getAllBoards } = useAuth();
    const router = useRouter();
    useEffect(() => {
        getAllBoards();
    }, [])

    const handleChange = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const changeSideBarView = () => {
        setIsEyeOpen(!isEyeOpen);
    }

    const signoutUser = () => {
        signOut()
        router.push('/auth/login')
    }
    return (

        <Wrapper>{isEyeOpen ?
            <ClosedSideBar>
                <ul className='sidebar-list'>
                    <SideBarIcon
                        key={1}
                        route={'/home'}
                        icon={boardIcon}
                    />
                    {authUser?.allBoards.map((item: any) => {
                        return (
                            <SideBarIcon
                                key={item._id}
                                route={`/board/${item.name}/${item._id}`}
                                icon={boardIcon}
                            />
                        )
                    })}
                </ul>
            </ClosedSideBar>
            :
            <OpenSideBar>
                <ul className='sidebar-list'>
                    <SideBarLink
                        key={1}
                        route={'/home'}
                        title={'Home'}
                        icon={boardIcon}
                    />
                    {authUser?.allBoards?.map((item: any) => {
                        return (
                            <SideBarLink
                                key={item._id}
                                route={`/board/${item.name}?boardId=${item._id}`}
                                title={item.name}
                                icon={boardIcon}
                            />

                        )
                    })}

                </ul>
            </OpenSideBar>
        }
            <SignoutContainer onClick={signoutUser}>
                {<ExitToAppIcon />}
                {!isEyeOpen && <span className='hide-sidebar-text'>Sign Out</span>}
            </SignoutContainer>

            {!isEyeOpen && <ThemeWrapper>
                <Image src={lightIcon} alt='icon' className='icon' />
                <Switch
                    checked={isDarkTheme}
                    onChange={handleChange}
                    color='primary'
                />
                <Image src={darkIcon} alt='icon' className='icon' />
            </ThemeWrapper>}

            <Collapse>
                <Image src={isEyeOpen ? openEyeIcon : closeEyeIcon} alt='icon' className='icon' onClick={changeSideBarView} />
                {!isEyeOpen && <span className='hide-sidebar-text'>Hide Sidebar</span>}
            </Collapse>
        </Wrapper>

    )
}

const Wrapper = styled.div`
     height: inherit;
     position: relative;
`;

const OpenSideBar = styled.div`
     width: 300px;
     padding-top: 10px;
     height: 600px;
     background-color: ${StyleConstants.WHITE_COLOR};
    .sidebar-list{
        padding: 0px;
        margin-top: 0;
    }

  .side-bar__item, .active-item{
    margin: 10px 15px 10px 0;
    list-style-type: none;
    padding: 15px 40px;
    border-radius: 0 50px 50px 0;
    width: 240px;
    transition: 0.5s;
    font-weight: 300;
    
&:hover{
    width: 220px;
    cursor: pointer;
    background-color: ${StyleConstants.ACCENT_COLOR};
    color: ${StyleConstants.LIGHT_LILAC};
  }
}
.active-item{
    background-color: ${StyleConstants.ACCENT_COLOR};
    color: ${StyleConstants.WHITE_COLOR};
    cursor: pointer;
    font-weight: 700;
    transition: 0.5s;
}
`;
const ClosedSideBar = styled.div`
        width: 100px;
        height: 600px;
        padding-top: 10px;
        background-color: ${StyleConstants.ACCENT_COLOR};
        color: ${StyleConstants.WHITE_COLOR};
      .sidebar-list{
            padding: 0px;
            margin-top: 0;
        }
      .closed-side-bar__item, .closed-active-item{
            margin: 10px 2px ;
            list-style-type: none;
            padding: 15px;
            width: 100px;
            transition: 0.5s;
      }
    .closed-active-item{
     img{
            width: 80px;
    }
    }

`;
const ThemeWrapper = styled.div`
      position: absolute;
      width: 90%;
      bottom:10%;
      text-align: center;
      background-color: ${StyleConstants.LIGHT_LILAC};
      padding: 5px;
      display:flex;
      justify-content: center;
      left: 5%;
      border-radius: 4px;
`;
const Collapse = styled.div`
      position: absolute;
      bottom: 1%;
      width: 100%;
      display: flex;
      padding: 20px;
      .hide-sidebar-text{
        margin-left: 15px;
        color: ${StyleConstants.MEDIUM_GREY_COLOR};
      }
`;

const SignoutContainer = styled.div`
      position: absolute;
      bottom: 20%;
      width: 100%;
      display: flex;
      padding: 20px;
      .hide-sidebar-text{
        margin-left: 15px;
        color: ${StyleConstants.MEDIUM_GREY_COLOR};
      }
`;