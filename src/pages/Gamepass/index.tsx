import { NavLink } from "react-router-dom";
import { ButtonCatalog, GamePassPage, MainTitleGamePass, VideoMakerGamePass } from "./styles";

export function Gamepass() {
    return(
        <GamePassPage>
        <MainTitleGamePass>Como criar uma gamepass</MainTitleGamePass>

        <VideoMakerGamePass></VideoMakerGamePass>

        <p>Viu como é Super Fácil não perca tempo e adquira um pacote de robux com o melhor preço.</p>

        <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
        </GamePassPage>
    )
}