import styled from 'styled-components'

export const NavWrap = styled.div `
    background: #eee;
    
    width: 100%;
    min-height: 50px;
`

export const Nav = styled.nav `
    width: 800px;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const NavItem = styled.div `
    position: relative;
    padding: 15px 0;
    p{
        margin: 0;
        font-size: 18px;
        color: #111;
    }
    &:hover{
        .dropdown{
            opacity: 1;
            top: 100%;
        }
    }
    
`
export const DropDown = styled.div `
position: absolute;
    top: 105%;
    min-width: 85px;
    min-height: 50px;
    background: #f5f5f5;
    z-index: 99;
    border-radius: 6px;
    padding: 15px;
    box-shadow: 1px 0px 5px -1px rgb(67 67 67 / 29%);
    opacity: 0;
    transition: all 0.3s;
    a{
        display: block;
        text-decoration: none;
        font-size: 18px;
        color: #111;
        margin: 8px 0;
        transition: all 0.3s;
        &:hover{
            color: #68ab98;
        }
    }
`