import { Avaliations, ButtonPay, Comments, Description, ImageRobux, Product, ProductInfo, ProductsContainer, SellRate } from "./styles";
import RobuxImage from "../../assets/robux.png"
import { priceFormatter, priceRobux } from "../../utils/formatter";
import SellIcon from '@mui/icons-material/Sell';
import { useContext, useEffect, useState } from "react";
import { ContextContents } from "../../context/context";
import { StarRating } from "../../components/StarRating";

export function Products() {

    const { productId, RobuxForSell, CommentsArray } = useContext(ContextContents);

    const [ sellRating, setSellRating] = useState<number>(1);

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

                        <h1> {priceRobux.format(RobuxProducts.valueRobux)} robux </h1>

                        <StarRating valueStar={RobuxProducts.starRating} />

                        <SellRate> <SellIcon fontSize="inherit" /> {sellRating} pessoas estão comprando nesse momento. </SellRate>

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

        <Avaliations>   
            
            <h1> <StarRating valueStar={5} /> ({CommentsArray.length}) Avaliações </h1>
        {CommentsArray.map((info)=>{
            return(
            <Comments>
                
                <StarRating valueStar={info.starRating} />
                
                <h3>{info.name}</h3>

                <p>{info.Comment}</p>
            </Comments>
            )
        })}
            
        
        </Avaliations>

    </ProductsContainer>
    )
}