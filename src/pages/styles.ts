import styled from "styled-components";


export const BodyPart = styled.div`
    display: flex;
    flex-direction: column;
`

export const Banner = styled.div`
    background-color: black;
    height: 500px;
    width: 100%;
`

export const Catalog = styled.div`
    background-color: green;
    height: 300px;
    width: 100%;
    margin-top: 10px;
`

export const Certificate = styled.div`
    background-color: red;
    height: 200px;
    width: 100%;
    margin-top: 10px;
`

export const FooterPage = styled.div`
    background-color: #484d50;
    color: white;
    height: 300px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    h4, p , img {
        gap: 10px;
        padding-left: 150px;
    }
    p {
        color: #D3D3D3;
    }
`

export const PixImageBox = styled.img`
    width: 190px;
    height: 190px;
`

export const Copyright = styled.p`
    margin-top: 20px;
`