import { NavLink } from "react-router-dom";
import { ButtonCatalog, SalesmanPage, SubTitleSalesman, VideoMaker } from "./styles";

export function SalesmanRobux() {
    return(
        <SalesmanPage>
            <h1>Seja um Vendedor De Robux</h1>
            <SubTitleSalesman>Seja um vendedor de robux profissional com a RoPay, cuidamos de tudo para você, desde da compra até a entrega dos robux para o cliente final, não perca tempo e venha trabalhar conosco.</SubTitleSalesman>
            <VideoMaker width="560" height="315" src="https://www.youtube.com/embed/rR4aAT2G4nE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoMaker>
            <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
            <p>Preparado para se tonar um vendedor de robux? Preencha este pequeno formulário e se torne um vendedor oficial da RoPay.</p>
        </SalesmanPage>
    )
}