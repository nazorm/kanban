import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import boardIcon from '../../assets/icons/board-icon.svg';

interface ISideBarLinkProps {
    route: string;
    title: string;
    icon: any;
}

export const SideBarLink = (props: ISideBarLinkProps) => {
    const { title, route, icon } = props;
    const router = useRouter();


    return (
        <Link href={route} style={{padding: '0'}}>
            <li className={router.pathname == route ? "active-item" : "side-bar__item"}>
                <Image src={icon} alt='icon' className='icon' />
                <span className='sidebar-title'> {title}</span>
            </li>
        </Link>

    )

}
export const SideBar = () => {
    const sideBarLinks = [
        {
            id: 1,
            title: 'Home',
            route: '/home',
            icon: boardIcon,
        },
        {
            id: 2,
            title: 'Board',
            route: '/board',
            icon: boardIcon,
        },
        {
            id: 3,
            title: 'Search Jobs',
            route: '/home',
            icon: boardIcon,
        },
        {
            id: 4,
            title: 'Search Jobs',
            route: '/home',
            icon: boardIcon,
        },
        {
            id: 5,
            title: 'Search Jobs',
            route: '/home',
            icon: boardIcon,
        },
    ]

    return (
        <Wrapper>
            <ul className='sidebar-list'>
                {sideBarLinks.map((item) => {
                    return (
                        <SideBarLink
                            key={item.id}
                            route={item.route}
                            title={item.title}
                            icon={item.icon}
                        />
                    )
                })}

            </ul>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    width: 300px;
    padding-top: 50px;
    height: 800px;
    background-color: ${StyleConstants.WHITE_COLOR};
    .sidebar-list{
     padding: 0px;
    }
    .icon{
        margin-right: 5px;
        svg{
            path{
            fill: ${StyleConstants.ACCENT_COLOR};
        }
        }

      
    }
.side-bar__item, .active-item{
    margin: 10px 15px;
    list-style-type: none;
    padding: 15px 40px;
    border-radius: 0 50px 50px 0;
    width: 240px;
    transition: 0.5s;
    font-weight: 300;
&:hover{
    width: 220px;
    margin-left: 5px;
    cursor: pointer;
    background-color: ${StyleConstants.ACCENT_COLOR};
    color: ${StyleConstants.LIGHT_LILAC};
    .icon{
        margin-right: 5px;
        fill: ${StyleConstants.WHITE_COLOR};
    }
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
