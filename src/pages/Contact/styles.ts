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
        height: 40px;
        border: 1px solid #808080;
    }
    button {
        background-color: green;
        color: white;
        width: 200px;
        height: 40px;
        border: none;
    }
`