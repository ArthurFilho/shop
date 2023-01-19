import { NavLink } from "react-router-dom";
import { ButtonCatalog, MainTitleSalesman, SalesmanPage, VideoMaker } from "./styles";

export function SalesmanRobux() {
    return(
        <SalesmanPage>
            <MainTitleSalesman>Seja um Vendedor De Robux</MainTitleSalesman>
            <p>Seja um vendedor de robux profissional com a RoPay, cuidamos de tudo para você, desde da compra até a entrega dos robux para o cliente final, não perca tempo e venha trabalhar conosco.</p>
            <VideoMaker></VideoMaker>
            <NavLink to="/catalog"> <ButtonCatalog>Acessar a loja</ButtonCatalog> </NavLink>
            <p>Preparado para se tonar um vendedor de robux? Preencha este pequeno formulário e se torne um vendedor oficial da RoPay.</p>
        </SalesmanPage>
    )
}