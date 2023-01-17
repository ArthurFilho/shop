import { HeaderContainer, ImgLogo, Logo, MenuItems, Search, SearchMenu } from "./styles";
import LogoC from "../../assets/MainPage/logo.png"
import { NavLink } from "react-router-dom";


export function Header () {
    return(
        <HeaderContainer>
            <Logo>
               <NavLink to="/"> <ImgLogo src={LogoC} /> </NavLink>
            </Logo>
        <MenuItems>
                <div> <NavLink to="/"> Início </NavLink> </div>
                <div> <NavLink to="/catalog"> Catálogo </NavLink> </div>
                <div> Entrar em contato </div>
            <SearchMenu>
                <Search type="text" placeholder="Pesquise" />
            </SearchMenu>
        </MenuItems>

        </HeaderContainer>
    )
}