import styled from "styled-components"

export const FooterPage = styled.div`
    background-color: #afacaa;
    color: white;
    height: 300px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    h4, p  {
        gap: 10px;
        padding-left: 150px;
        color: black;
    }
    p {
        color: black;
    }
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
      }
`

export const PixImageBox = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 150px;
`

export const Copyright = styled.p`
    margin-top: 15px;
    font-size: 12px;
`

export const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
      }
`

export const LineCopyright = styled.hr`
    margin-top: 15px;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
`

export const PagamentForms = styled.div`
    display: flex;
    padding-left: 10px;
`