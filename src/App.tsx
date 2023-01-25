import { FooterPart } from "./components/Footer";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/context";

export function App() {
  return (
   <>
    <GlobalStyle />
    
    <BrowserRouter>
    <ContextProvider>
        <Header />
          <Router />
        <FooterPart />
    </ContextProvider>
    </BrowserRouter>
   </>
  )
}


