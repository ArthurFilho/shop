import { NavLink } from "react-router-dom";
import { VideoMaker } from "../SalesmanRobux/styles";
import { ButtonCatalog, BuyPage } from "./styles";

export function HowToBuy() {
    return(
        <BuyPage>
        <h1>COMO COMPRAR E COMO RECEBO?</h1>

        <VideoMaker width="560" height="315" src="https://www.youtube.com/embed/rR4aAT2G4nE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoMaker>

        <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
        </BuyPage>
    )
}