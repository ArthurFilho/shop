import React, { Suspense, lazy } from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { CatalogPage } from './pages/CatalogPage'
import { ContactPage } from './pages/Contact'
import { Gamepass } from './pages/Gamepass'
import { HomePage } from './pages/HomePage'
import { HowToBuy } from './pages/HowToBuy'
import { PagamentPage } from './pages/PagamentScreen'
import { Products } from './pages/Products'
import { SalesmanRobux } from './pages/SalesmanRobux'

const PrivateRoutes = ({component: Component, ...rest}: any) => (
  <Route 
    {...rest}
    render={(props: any) => (
    (localStorage.getItem('access_token')) ?
     <Component {...props} />
     :
     <Redirect to="/" />
     )}
  />
)

export function Router() {
  return (
    <Routes>
    <Suspense fallback={<div> <CircularProgress /></div>}>
      
      <Route >
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/howtobuy" element={<HowToBuy />} />
        <Route path="/gamepass" element={<Gamepass />} />
        <Route path="/salesman" element={<SalesmanRobux />} />
        <Route path="/products" element={<Products />} />
        <Route />
      </Route>
    </Suspense>
    </Routes>
  )
}
