import { Banner, BodyPart, Catalog, Certificate, Copyright, FooterPage, PixImageBox } from "./styles";
import PixImage from "../assets/MainPage/pix.svg"


export function MainPage() {
    return(
        <BodyPart>
            <Banner />
            <Catalog />
            <Certificate />
            <FooterPage>
                <h4> Informações </h4>
                <div>
                    <p> Pesquisar </p>
                    <p> Como criar um gamepass </p>
                    <p> Como comprar e como recebo? </p>
                </div>
                <hr />
                <div>
                <Copyright> © 2023 Império dos Bobux - Todos os direitos reservados. </Copyright>
                <PixImageBox src={PixImage} />
                </div>
            </FooterPage>
        </BodyPart>
    )
}