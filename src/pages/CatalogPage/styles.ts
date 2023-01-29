import styled from "styled-components";

export const CatalogTitle = styled.p`
    font-size: 20px;
    margin-left: 80px;
    font-weight: bold;
`
export const CatalogContainer = styled.button`
    background-color: white;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: none;
    cursor: pointer;
`
export const ImageRobux = styled.div`
    width: 200px;
    height: 220px;
    display: flex;
`

export const RobuxSell = styled.h1`
    margin-bottom: 10px;
    margin-top: 10px;
`

export const StarsFeedback = styled.div`
    margin-bottom: 10px;
`

export const CatalogBody = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const BoxCatalog = styled.div`
    display: flex;
    gap: 100px;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
      }
`

export const Image = styled.img`
    width: 250px;
    height: 200px;
`

export const PriceRobux = styled.h2`
`