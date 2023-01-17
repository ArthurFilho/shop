import { FooterPart } from "./components/Footer";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
   <>
    <GlobalStyle />
    
    <BrowserRouter>
        <Header />
          <Router />
        <FooterPart />
    </BrowserRouter>
   </>
  )
}


