import { priceFormatter } from "../../utils/formatter";
import { CatalogBody, CatalogContainer, CatalogTitle, ContainerFilter, ImageRobux, RobuxSell, StarsFeedback } from "./styles";

export function CatalogPage() {
    return(
        <CatalogBody>
            <CatalogTitle>
                PRODUTOS
            </CatalogTitle>

            <ContainerFilter>

            </ContainerFilter>

            <CatalogContainer>
             <ImageRobux></ImageRobux>
                <RobuxSell>500 Robux</RobuxSell>
                <StarsFeedback> stars </StarsFeedback>
             <div>{priceFormatter.format(50)}</div>
            </CatalogContainer>
        </CatalogBody>
    )
}