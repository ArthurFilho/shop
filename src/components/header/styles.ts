import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 2.5rem 0 5.5rem;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
`

export const Logo = styled.div`
    font-size: 50px;
    margin-left: 1rem;
`

export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    button {
        display: flex;
        border: none;
        align-items: center;
        background-color: white;
        gap: 5px;
        display: none;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }
    @media (max-width: 768px) {
        button {
            display: flex;
        }
        ul {
        flex-direction: column;
    }
    }
`

export const SearchMenu = styled.div`
    margin-left: 15px;
`

export const Search = styled.input`
    border: 1px solid black;
    padding: 5px;
`

export const ImgLogo = styled.img`
    width: 100px;
    height: 120px;
`