import { HeaderContainer, Logo, MenuItems, Search, SearchMenu } from "./styles";

export function Header () {
    return(
        <HeaderContainer>
        <Logo>
            Ropay
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