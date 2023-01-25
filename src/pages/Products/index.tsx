import { ButtonPay, Description, ImageRobux, Product, ProductInfo, ProductsContainer, SellRate } from "./styles";
import RobuxImage from "../../assets/robux.png"
import { priceFormatter } from "../../utils/formatter";
import SellIcon from '@mui/icons-material/Sell';
import { StarRating } from "../../components/StarRating";


export function Products() {

    return(
    <ProductsContainer>
            
        <ProductInfo>

            <ImageRobux>
                <img src={RobuxImage} />
            </ImageRobux>

            <Product>
                
                <h1> 2000 robux </h1>
                
                <StarRating />

                <SellRate> <SellIcon fontSize="inherit" /> vendidos nas últimas 20 horas. </SellRate>
                
                <div>
                    <p> preço promocional </p>
                    <h1> {priceFormatter.format(35.99)} </h1>
                </div>

                <ButtonPay> COMPRE JÁ! </ButtonPay>

            </Product>

        </ProductInfo>

        <Description>
            <hr />
            <h1> Descrição </h1>


            <div>SATISFAÇÃO 100% GARANTIDA ou seu dinheiro de volta.</div>
        </Description>

    </ProductsContainer>
    )
}