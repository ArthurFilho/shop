import styled from "styled-components";

export const SubTitleSalesman = styled.p`
    display: flex;
    margin-left: 100px;
    @media (max-width: 768px) {
      margin-left: 0px;
      }
`

export const VideoMaker = styled.iframe`
    width: 400px;
    height: 250px;
    background-color: black;
    display: flex;
    margin-bottom: 50px;
    margin-top: 50px;
`

export const SalesmanPage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h1 {
        display: flex;
        margin-right: 700px;
        margin-bottom: 50px;
    }
    @media (max-width: 768px) {
       align-items:center ;
       justify-content: center;
       text-align: center;
       h1 {
        display: flex;
        margin-right: 0px;
        margin-bottom: 0px;
    }
      }
`

export const ButtonCatalog = styled.button`
    border: none;
    background-color: #1E90FF;
    width: 250px;
    height: 50px;
    color: #ffff;
    border-radius: 20px ;
    cursor: pointer;
`