import { FooterPart } from "./components/Footer";
import { Header } from "./components/header";
import { Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { MainPage } from "./pages/HomePage";

export function App() {
  return (
   <>
    <GlobalStyle />
    <Header />
    <Route />
    <MainPage />
    <FooterPart />
   </>
  )
}


