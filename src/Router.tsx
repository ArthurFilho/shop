import { Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage'
import { MainPage } from './pages/HomePage'


export function Router() {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<MainPage />} />
        <Route path="/checkoutpage" element={<CatalogPage />} />
      </Route>
    </Routes>
  )
}
