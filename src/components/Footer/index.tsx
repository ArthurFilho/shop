import { Copyright, CopyrightContainer, FooterPage, InformationContainer, LineCopyright, PagamentForms, PixImageBox } from "./styles";
import PixImage from "../../assets/MainPage/pix.svg";
import { NavLink } from "react-router-dom";

export function FooterPart() {
    return(
            <FooterPage>
                <InformationContainer>
                 <h4> Informações </h4>
                    <p> <NavLink to="/gamepass"> Como criar um gamepass </NavLink> </p>
                    <p> <NavLink to="/howtobuy"> Como comprar e como recebo? </NavLink> </p>
                    <p> <NavLink to="/salesman"> Seja um Vendedor De Robux </NavLink> </p>
                </InformationContainer>
                <LineCopyright />
                <CopyrightContainer>
                <Copyright> © 2023 Império dos Bobux - Todos os direitos reservados. </Copyright>
                <PagamentForms><PixImageBox src={PixImage} /></PagamentForms>
                </CopyrightContainer>
            </FooterPage>
    )
}