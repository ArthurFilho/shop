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
    cursor: pointer;
    @media (max-width: 768px) {
        width: 200px;
    }
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

export const Avaliations = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 200px;
    h1 {
        display: flex;
        margin-bottom: 50px;
        gap: 10px;
    }
`
export const Comments = styled.div`
    h3 {    
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 100px;
    }
`