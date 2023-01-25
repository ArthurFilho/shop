import { StarRating } from "../../components/StarRating";
import { priceFormatter } from "../../utils/formatter";
import { BoxCatalog, CatalogBody, CatalogContainer, CatalogTitle, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

export function CatalogPage() {
    return(
        <CatalogBody>
            <CatalogTitle>
                PRODUTOS
            </CatalogTitle>

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
        
        </CatalogBody>
    )
}