import styled from "styled-components"

export const FooterPage = styled.div`
    background-color: #484d50;
    color: white;
    height: 300px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    h4, p  {
        gap: 10px;
        padding-left: 150px;
    }
    p {
        color: #D3D3D3;
    }
`

export const PixImageBox = styled.img`
    width: 400px;
    height: 40px;
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