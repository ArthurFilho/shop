import { CreditCard, Check, Truck } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { ContextContents } from "../../context/context";
import { priceFormatter, priceRobux } from "../../utils/formatter";
import RobuxImage from "../../assets/robux.png"
import BannerImage from "../../assets/banner.png"

import { Banner, BodyPart, BoxCatalog, Catalog, CatalogContainer, Certificate, CertificateContainer, Image, ImageRobux, PriceRobux, RobuxSell, StarsFeedback } from "./styles";

export function HomePage() {

    const { RobuxForSell ,InformationRobux } = useContext(ContextContents)

    return(
        <BodyPart>
            <Banner> <img src={BannerImage}/> </Banner>
            <Catalog> 
            
            <h2>Promoção</h2>
            <p>Confira os produtos que entraram em promoção essa semana!</p>

        <BoxCatalog>

            {RobuxForSell.map((Robux) => {
                return(
                <NavLink to="/products">
                    <CatalogContainer key={Robux.id} onClick={() => {InformationRobux(Robux.id)}}>
                        <ImageRobux> <Image src={RobuxImage} /> </ImageRobux>
                        <RobuxSell>{priceRobux.format(Robux.valueRobux)} Robux</RobuxSell>
                        <StarsFeedback> <StarRating valueStar={Robux.starRating} /> </StarsFeedback>
                        <PriceRobux>{priceFormatter.format(Robux.value)}</PriceRobux>
                    </CatalogContainer>
                </NavLink>
                )
            })}

        </BoxCatalog>

            </Catalog>

            <Certificate>
                
                <CertificateContainer>
                    <CreditCard size={100} />
                    <h4>SEUS DADOS ESTÃO SEGUROS!</h4>
                    <p>Utilizamos a mesma segurança virtual que bancos internacionais aprovam. Seus dados estão seguros!</p>
                </CertificateContainer>  
                
                <CertificateContainer>
                    <Check size={100} />
                    <h4>SATISFAÇÃO GARANTIDA!</h4>
                    <p>Garantimos que você fique contente com sua compra, caso contrário devolvemos seu dinheiro!</p>
                </CertificateContainer>
                
                <CertificateContainer>
                    <Truck size={100} />
                    <h4>ENVIO DIGITAL!</h4>
                    <p>Enviamos os robux em um prazo de até 24 Horas, de forma totalmente online e digital.</p>
                </CertificateContainer>  
            
            </Certificate>
        </BodyPart>
    )
}