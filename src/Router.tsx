import { Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage'
import { HomePage } from './pages/HomePage'

export function Router() {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
  )
}
