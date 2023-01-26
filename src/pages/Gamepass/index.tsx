import { NavLink } from "react-router-dom";
import { VideoMaker } from "../SalesmanRobux/styles";
import { ButtonCatalog, GamePassPage } from "./styles";

export function Gamepass() {
    return(
        <GamePassPage>
        <h1>Como criar uma gamepass</h1>

        <VideoMaker width="560" height="315" src="https://www.youtube.com/embed/rR4aAT2G4nE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoMaker>

        <p>Viu como é Super Fácil não perca tempo e adquira um pacote de robux com o melhor preço.</p>

        <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
        </GamePassPage>
    )
}