import { CreditCard, Check, Truck } from "phosphor-react";
import { StarRating } from "../../components/StarRating";
import { priceFormatter } from "../../utils/formatter";

import { Banner, BodyPart, BoxCatalog, Catalog, CatalogContainer, Certificate, CertificateContainer, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

export function HomePage() {
    return(
        <BodyPart>
            <Banner />
            <Catalog> 
            
            <h2>Promoção</h2>
            <p>Confira os produtos que entraram em promoção essa semana!</p>

        <BoxCatalog>

            <CatalogContainer>
                <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(14.99)}</div>
            </CatalogContainer>

            <CatalogContainer>
                <ImageRobux></ImageRobux>
                <RobuxSell>1000 Robux</RobuxSell>
                <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(29.99)}</div>
            </CatalogContainer>

            <CatalogContainer>
                <ImageRobux></ImageRobux>
                <RobuxSell>5000 Robux</RobuxSell>
                <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(149.99)}</div>
            </CatalogContainer>

            <CatalogContainer>
                <ImageRobux></ImageRobux>
                <RobuxSell>10000 Robux</RobuxSell>
                <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(299.99)}</div>
            </CatalogContainer>

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
                    <h4>SATISFAÇÃO GARANTIDA</h4>
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