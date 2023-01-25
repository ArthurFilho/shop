import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ProductInfo = styled.div`
    display: flex;
    margin-bottom: 100px;
`

export const ImageRobux = styled.div`
    width: 200px;
    height: 220px;
    display: flex;
    margin-right: 50px;
`

export const ButtonPay = styled.button`
    padding: 15px;
    border: none;
    background-color: green;
    color: white;
`

export const Description = styled.div`
    gap: 5px;
    hr {
    height: 2px;
       width:50px ;
       background-color: black;
    }
`

export const Product = styled.div`
    display: flex ;
    flex-direction: column;
    gap: 10px;
`

export const SellRate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`