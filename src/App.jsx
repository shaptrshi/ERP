
import './App.css'
import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Dashboard from './scene/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderPage from './scene/OrderPage/OrderPage'
import ProductPage from './scene/ProductPage/ProductPage'
import EditProduct from './scene/EditProduct/EditProduct'
import AddProduct from './scene/AddProduct/AddProduct'
import CalendarView from './scene/CalenderView/CalendarView'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/add-products' element={<AddProduct />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/edit-products" element={<EditProduct />} />
      <Route path='/orders-calendar' element={<CalendarView />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
