import { ButtonPay, Description, ImageRobux, Product, ProductInfo, ProductsContainer, SellRate } from "./styles";
import RobuxImage from "../../assets/robux.png"
import { priceFormatter } from "../../utils/formatter";
import SellIcon from '@mui/icons-material/Sell';
import { StarRating } from "../../components/StarRating";
import { useContext } from "react";
import { ContextContents } from "../../context/context";


export function Products() {

    const { productId, RobuxForSell } = useContext(ContextContents)

     const RobuxSelected = RobuxForSell.filter(Robux => (Robux.id === productId));

    return(
    <ProductsContainer>
            
        <ProductInfo>
        {RobuxSelected.map((RobuxProducts)=> {
            return(
                <>
                <ImageRobux>
                    <img src={RobuxImage} />
                </ImageRobux>
                <Product>

                        <h1> {RobuxProducts.valueRobux} robux </h1>

                        <StarRating />

                        <SellRate> <SellIcon fontSize="inherit" />  vendidos nas últimas 20 horas. </SellRate>

                        <div>
                            <p> preço promocional </p>
                            <h1> {priceFormatter.format(RobuxProducts.value)} </h1>
                        </div>

                        <ButtonPay> COMPRE JÁ! </ButtonPay>

                </Product>
                
                </>
            )
        })}
    
        </ProductInfo>

        <Description>
            <hr />
            <h1> Descrição </h1>


            <div>SATISFAÇÃO 100% GARANTIDA ou seu dinheiro de volta.</div>
        </Description>

    </ProductsContainer>
    )
}