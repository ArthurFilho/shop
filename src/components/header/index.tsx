import { HeaderContainer, ImgLogo, Logo, MenuItems, Search, SearchMenu } from "./styles";
import LogoC from "../../assets/Header/Logo.png"
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
                <div> <NavLink to="/contact"> Entrar em contato </NavLink> </div>
            <SearchMenu>
                <h4>Dúvidas? suporte@deli.com</h4>
                <Search type="text" placeholder="Pesquise" />
            </SearchMenu>
        </MenuItems>

        </HeaderContainer>
    )
}