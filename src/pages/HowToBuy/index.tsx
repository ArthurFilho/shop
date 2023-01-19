import { NavLink } from "react-router-dom";
import { ButtonCatalog, BuyPage, VideoMakerBuy } from "./styles";

export function HowToBuy() {
    return(
        <BuyPage>
        <h1>COMO COMPRAR E COMO RECEBO?</h1>

        <VideoMakerBuy> </VideoMakerBuy>

        <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
        </BuyPage>
    )
}