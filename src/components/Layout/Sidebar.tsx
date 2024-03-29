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
import { BiHomeAlt } from 'react-icons/bi';
import closeEyeIcon from '../../assets/icons/eye-slash.svg';
import openEyeIcon from '../../assets/icons/open-eye.svg';
import lightIcon from '../../assets/icons/light-icon.svg';
import darkIcon from '../../assets/icons/dark-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from 'store/landingSlice/call';
import { userBoardSelector } from 'store/landingSlice';
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

export const OpenSideBarHome = (props: ISideBarLinkProps) => {
    const { title, route, icon } = props;
    const router = useRouter();

    return (

        <li className={router.asPath.includes(route) ? "active-item" : "side-bar__item"}>
            <Link href={route} style={{ padding: '0' }}>
                <div className='open-sidebar'>
                    {icon}
                    <span className='sidebar-title'> {title}</span>
                </div>
            </Link>
        </li>


    )
}

export const SideBarIcon = (props: ISideBarLinkProps) => {
    const { route, icon , title} = props;
    const router = useRouter();
    return (
        <li className={router.asPath.includes(route) ? "closed-active-item" : "closed-side-bar__item"}>
            <Link href={route}>
                <div className='closed-sidebar'>
                <p className='title-short'>{title?.substring(0,3)}</p>
                    {/* <Image src={icon} alt='icon' className='icon' width={20} height={20} /> */}
                </div>
            </Link>
        </li>
    )

}
export const ClosedSideBarHome = (props: ISideBarLinkProps) => {
    const { route, icon } = props;
    const router = useRouter();
    return (
        <li className={router.asPath.includes(route) ? "closed-active-item" : "closed-side-bar__item"}>
            <Link href={route}>
                <div className='closed-sidebar'>
                    {icon}
                </div>
            </Link>
        </li>
    )
}
export const SideBar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isEyeOpen, setIsEyeOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const allBoards = useSelector(userBoardSelector);
    useEffect(() => {
        getAllBoards(dispatch, setLoading);
    }, [])

    const handleChange = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const changeSideBarView = () => {
        setIsEyeOpen(!isEyeOpen);
    }

    const signoutUser = () => {
        // signOut()
        router.push('/auth/login')
    }
    return (

        <Wrapper>{isEyeOpen ?
            <ClosedSideBar>
                <ul className='sidebar-list'>
                    <ClosedSideBarHome
                        key={1}
                        route={'/home'}
                        icon={<BiHomeAlt style={{ width: '25px', height: '25px', display: 'block' }} />}
                    />
                    {allBoards?.map((item: any) => {
                        return (
                            <SideBarIcon
                                key={item._id}
                                route={`/board/${item.name}?boardId=${item._id}`}
                                icon={boardIcon}
                                title={item.name}
                            />
                        )
                    })}
                </ul>
            </ClosedSideBar>
            :
            <OpenSideBar>
                <ul className='sidebar-list'>
                    <OpenSideBarHome
                        key={1}
                        route={'/home'}
                        title={'Home'}
                        icon={<BiHomeAlt style={{ width: '25px', height: '22px', display: 'inline-block' }} />}
                    />
                    {allBoards?.map((item: any) => {
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

            {/* {!isEyeOpen && <ThemeWrapper>
                <Image src={lightIcon} alt='icon' className='icon' />
                <Switch
                    checked={isDarkTheme}
                    onChange={handleChange}
                    color='primary'
                />
                <Image src={darkIcon} alt='icon' className='icon' />
            </ThemeWrapper>} */}

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
     overflow-y: scroll;
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
  .open-sidebar{
    display: flex;
    align-items: center;
  }
  .sidebar-title{
    margin-left: 5px;
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
        overflow-y: scroll;
        background-color: ${StyleConstants.ACCENT_COLOR};
        color: ${StyleConstants.WHITE_COLOR};
      .sidebar-list{
            padding: 0px;
            margin-top: 0;
        }
      .closed-side-bar__item, .closed-active-item{
            margin: 5px 2px ;
            list-style-type: none;
            padding: 5px 15px;
            width: 100px;
            transition: 0.5s;
      }
    .closed-active-item{
     img{
            width: 80px;
    }

    }
    .title-short{
        border: 1px solid green;
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