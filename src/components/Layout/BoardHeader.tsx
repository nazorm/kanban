import React, { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/icons/logo-dark.svg';
import moreIcon from '../../assets/icons/more-icon.svg';
import { customMedia } from 'styles/breakpoints';
import { useRouter } from "next/router";
import { StyleConstants } from 'styles/StylesConstants';
import { useAuth } from 'src/api/context';
import { Popover } from '@mui/material';
import { Dialog } from '@mui/material';
import { AddCollaboratorCard, AddEditBoard, AddEditCard } from 'src/pages/board/components/AddEditCard';

export const BoardHeader = () => {
  const router = useRouter();
  const { authUser, loading, deleteBoard, updateBoard, addCollaborator } = useAuth();
  const boardId = router.query.boardId
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/auth/login')
  }, [authUser, loading])

  const handleMoreActions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log('really', authUser)

  const handleCollaborator = () => {
    setActiveModal('collaborator')
    setIsViewTaskModalOpen(!isViewTaskModalOpen)
  }
  const handleDeleteBoard = () => {
    deleteBoard(boardId)
  }
  const handleUpdateBoard = () => {
    setActiveModal('board-update')
    setIsViewTaskModalOpen(!isViewTaskModalOpen)
  }


  const handleViewTaskModal = () => {
    setIsViewTaskModalOpen(!isViewTaskModalOpen)
  }

  return (
    <Wrapper>
      <Head>
        <title>Board</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header>
        <div style={{ display: 'flex' }} className='logo-div'>
          <Link href="/home">
            <Image src={logo} alt='logo' className='logo' height={30} />
          </Link>
          <p className='page'>{router.pathname}</p>
        </div>
        <nav className='nav'>
          <Link href="/home" >
            <a className='account'>{authUser ? authUser?.fullName : 'Account'}</a>
          </Link>
          {router.pathname !== '/home' &&
            <MoreActions>
              <MoreButton className='more-button' onClick={handleMoreActions}>
                <Image src={moreIcon} alt='more' width={30} height={15} />
              </MoreButton>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <PopoverButton className='popover-button' onClick={handleCollaborator}>
                  Add Collaborator
                </PopoverButton>
                <PopoverButton className='popover-button' onClick={handleUpdateBoard}>
                  Update Board
                </PopoverButton>
                <PopoverButton className='popover-button' onClick={handleDeleteBoard}>
                  Delete Board
                </PopoverButton>
              </Popover>
            </MoreActions>}


        </nav>

      </Header>
      <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
        {activeModal === 'collaborator' ? <AddCollaboratorCard /> : <AddEditBoard boardParam='edit' />}

      </Dialog>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 100%;
padding: 0 20px;
background-color: ${StyleConstants.WHITE_COLOR};
z-index: 2;

${customMedia.lessThan("medium")`
      padding: 0 5px;
  `};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-div{
    justify-content: space-between;
    width: 25%;
    align-items: center;
    ${customMedia.lessThan("xlarge")`
        width: 35%;
  `};
      ${customMedia.lessThan("medium")`
        width: 60%;
  `};
  }
  .page{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    font-family: 'Lobster', cursive;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
    line-height: 18px;
    align-self: end;
    ${customMedia.lessThan("medium")`
         font-size: 12px;
  `};
  }
  .account{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    ${customMedia.lessThan("medium")`
         font-size: 12px;
  `};
  }
  .nav{
    width: 100px;
    display: flex:
    justify-content: space-between;
    align-items: center;
  }
`
const MoreButton = styled.button`
  background: transparent;
  border: transparent;
`;
const PopoverButton = styled.button`
 display: block;
  padding: 10px;
  background: transparent;
  border: transparent;
  &:nth-child(3){
    color: red;
  }
`;
const MoreActions = styled.div`
`;