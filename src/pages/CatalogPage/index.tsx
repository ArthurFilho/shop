import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { ContextContents } from "../../context/context";
import { priceFormatter, priceRobux } from "../../utils/formatter";
import { BoxCatalog, CatalogBody, CatalogContainer, CatalogTitle, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

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
                <CatalogContainer key={Robux.id} onClick={InformationRobux(Robux.id)}>
                <ImageRobux></ImageRobux>
                   <RobuxSell>{priceRobux.format(Robux.valueRobux)} Robux</RobuxSell>
                   <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(Robux.value)}</div>
               </CatalogContainer>
            </NavLink>
            )
        })}
        </BoxCatalog>
        
        </CatalogBody>
    )
}