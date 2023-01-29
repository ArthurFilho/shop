import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { ContextContents } from "../../context/context";
import { priceFormatter, priceRobux } from "../../utils/formatter";
import { BoxCatalog, CatalogBody, CatalogContainer, CatalogTitle, Image, ImageRobux, PriceRobux, RobuxSell, StarsFeedback } from "./styles";
import RobuxImage from "../../assets/robux.png"

export function CatalogPage() {

    const { RobuxForSell, InformationRobux } = useContext(ContextContents)

    return(
        <CatalogBody>
            <CatalogTitle>
                PRODUTOS
            </CatalogTitle>

        <BoxCatalog>
       
        {RobuxForSell.map((Robux) =>{
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
        
        </CatalogBody>
    )
}