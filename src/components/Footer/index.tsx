import { Copyright, CopyrightContainer, FooterPage, InformationContainer, LineCopyright, PagamentForms, PixImageBox } from "./styles";
import PixImage from "../../assets/MainPage/pix.svg";

export function FooterPart() {
    return(
            <FooterPage>
                <InformationContainer>
                 <h4> Informações </h4>
                    <p> Pesquisar </p>
                    <p> Como criar um gamepass </p>
                    <p> Como comprar e como recebo? </p>
                </InformationContainer>
                <LineCopyright />
                <CopyrightContainer>
                <Copyright> © 2023 Império dos Bobux - Todos os direitos reservados. </Copyright>
                <PagamentForms><PixImageBox src={PixImage} /></PagamentForms>
                </CopyrightContainer>
            </FooterPage>
    )
}