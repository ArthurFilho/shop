import { priceFormatter } from "../../utils/formatter";
import { BoxCatalog, CatalogBody, CatalogContainer, CatalogTitle, ContainerFilter, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

export function CatalogPage() {
    return(
        <CatalogBody>
            <CatalogTitle>
                PRODUTOS
            </CatalogTitle>

            <ContainerFilter>

            </ContainerFilter>

        <BoxCatalog>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>
        
        </BoxCatalog>
        
        </CatalogBody>
    )
}