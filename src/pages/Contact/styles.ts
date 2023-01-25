import styled from "styled-components";

export const ContactPaga = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    width: 500px;
    h1, p, input, hr {
        margin-bottom: 20px;
    }
    hr {
        width: 80px;
    }
    input {
        width: 100%;
        height: 40px;
        border: 1px solid #808080;
        padding: 7.5px;
    }
`

export const ButtonForm = styled.input`
        background-color: green;
        color: white;
        width: 200px;
        height: 40px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
`

export const TextAreaContact = styled.textarea`
    height: 100px;
    width: 100%;
    margin-bottom: 50px;
`