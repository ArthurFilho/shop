import { Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage'
import { ContactPage } from './pages/Contact'
import { Gamepass } from './pages/Gamepass'
import { HomePage } from './pages/HomePage'
import { HowToBuy } from './pages/HowToBuy'
import { Products } from './pages/Products'
import { SalesmanRobux } from './pages/SalesmanRobux'

export function Router() {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/howtobuy" element={<HowToBuy />} />
        <Route path="/gamepass" element={<Gamepass />} />
        <Route path="/salesman" element={<SalesmanRobux />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  )
}
