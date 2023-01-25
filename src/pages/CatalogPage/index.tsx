import { useContext } from "react";
import { StarRating } from "../../components/StarRating";
import { ContextContents } from "../../context/context";
import { priceFormatter } from "../../utils/formatter";
import { BoxCatalog, CatalogBody, CatalogContainer, CatalogTitle, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

export function CatalogPage() {

    const { RobuxForSell } = useContext(ContextContents)

    return(
        <CatalogBody>
            <CatalogTitle>
                PRODUTOS
            </CatalogTitle>

        <BoxCatalog>
       
        {RobuxForSell.map((Robux) =>{
            return(
                <CatalogContainer id={Robux.id}>
                <ImageRobux></ImageRobux>
                   <RobuxSell>{Robux.valueRobux} Robux</RobuxSell>
                   <StarsFeedback> <StarRating /> </StarsFeedback>
                <div>{priceFormatter.format(Robux.value)}</div>
               </CatalogContainer>
            )
        })}
        </BoxCatalog>
        
        </CatalogBody>
    )
}