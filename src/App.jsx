import React from 'react'
import Product from './components/Product.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import RootLayout from './components/RootLayout.jsx'
import Cart from './components/Cart.jsx'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className='App'>
      <RouterProvider router={router} />
      
    </div>
  )
}
