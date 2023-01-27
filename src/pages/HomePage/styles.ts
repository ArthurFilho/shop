import styled from "styled-components";


export const BodyPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Banner = styled.div`
    background-color: black;
    height: 500px;
    width: 100%;
`

export const Catalog = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 150px;
    align-items: center;
    @media (max-width: 768px) {
        height: 100%;
      }
`

export const Certificate = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    margin-top: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        gap: 40px;
      }
`
export const CertificateContainer = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border: 1px solid black;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 35px;
    gap: 20px;
    p {
        font-size: 12.5px;
    }
` 
export const CatalogContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const ImageRobux = styled.div`
    width: 200px;
    height: 220px;
    display: flex;
    background-color: black;
`

export const RobuxSell = styled.p`
    margin-bottom: 10px;
    margin-top: 10px;
`

export const StarsFeedback = styled.div`
    margin-bottom: 10px;
`

export const BoxCatalog = styled.div`
    display: flex;
    gap: 30px; 
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`
