import styled from 'styled-components';

export const StyledNavigation = styled.nav`
    padding: 25px;
    display: flex;
    justify-content: center;
`

export const StyledNavUl = styled.ul`
    display: flex;
    
    gap: 100px;
    list-style: none;
    text-decoration: none;
    & a {
        text-decoration: none;
        font-size: 33px;
        color:#5c6bc0
    }
    & a:hover {
        color:#5d33e6;
    }
`
