import { ButtonPay, Description, ImageRobux, Product, ProductInfo, ProductsContainer, SellRate } from "./styles";
import RobuxImage from "../../assets/robux.png"
import { priceFormatter, priceRobux } from "../../utils/formatter";
import SellIcon from '@mui/icons-material/Sell';
import { StarRating } from "../../components/StarRating";
import { useContext, useEffect, useState } from "react";
import { ContextContents } from "../../context/context";


export function Products() {

    const { productId, RobuxForSell } = useContext(ContextContents)

    const [ infiniteTime, setInfinityTime ] = useState<number>(0);

    const [ sellRating, setSellRating] = useState<number>(30);

     const RobuxSelected = RobuxForSell.filter(Robux => (Robux.id === productId));

     function NumerosAleatorios () {
      const NumberRandom = Math.floor(Math.random() * 100);
        setSellRating(NumberRandom)
     }

     useEffect(()=>{
        NumerosAleatorios()
        setInterval( function InifiniteLoop () { setInfinityTime(1) },  86400)
     }, [infiniteTime])

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

                        <StarRating />

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

    </ProductsContainer>
    )
}