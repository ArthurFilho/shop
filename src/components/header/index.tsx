import { HeaderContainer, ImgLogo, Logo, MenuItems, Search, SearchMenu } from "./styles";
import LogoC from "../../assets/MainPage/logo.png"

export function Header () {
    return(
        <HeaderContainer>
        <Logo>
            <ImgLogo src={LogoC} />
        </Logo>

        <MenuItems>
            <div> Início </div>
            <div> Catálogo </div>
            <div> Entrar em contato </div>
            <SearchMenu>
                <Search type="text" placeholder="Pesquise" />
            </SearchMenu>
        </MenuItems>

        </HeaderContainer>
    )
}