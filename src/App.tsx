import { Header } from "./components/header";
import { MainPage } from "./pages";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
   <>
    <GlobalStyle />
    <Header />
    <MainPage />
   </>
  )
}


