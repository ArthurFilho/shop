import { Banner, BodyPart, Catalog, Certificate } from "./styles";



export function MainPage() {
    return(
        <BodyPart>
            <Banner />
            <Catalog />
            <Certificate />
        </BodyPart>
    )
}