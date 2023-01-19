import { NavLink } from "react-router-dom";
import { ButtonCatalog, GamePassPage, VideoMakerGamePass } from "./styles";

export function Gamepass() {
    return(
        <GamePassPage>
        <h1>Como criar uma gamepass</h1>

        <VideoMakerGamePass></VideoMakerGamePass>

        <p>Viu como é Super Fácil não perca tempo e adquira um pacote de robux com o melhor preço.</p>

        <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
        </GamePassPage>
    )
}