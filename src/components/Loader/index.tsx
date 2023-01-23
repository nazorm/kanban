import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";



export const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress color="inherit" />
        </Wrapper>
    )
};

const Wrapper = styled.section`
    width: 100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
`