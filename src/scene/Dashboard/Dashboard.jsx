import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/SideBar/SideBar';
import ProductView from '../../components/ProductView/ProductView';
import OrderView from '../../components/OrderView/OrderView';
import {useNavigate} from 'react-router-dom';
import data from '../../data/data';
import orders from '../../data/orders';
import './Dashboard.css';
import CalendarView from '../CalenderView/CalendarView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CalenderWidget from '../../components/Calendar/CalenderWidget';

const Dashboard=()=>{
  const navigate=useNavigate();
  const [products,setProducts]=useState(()=>{
    return JSON.parse(localStorage.getItem('products'));
  });
  const [totalOrders,setTotalOrders]=useState(()=>{
    return JSON.parse(localStorage.getItem('orders'));
  });
  useEffect(()=>{
    if (!localStorage.getItem('products') ){
      localStorage.setItem('products',JSON.stringify(data))
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
    if (!localStorage.getItem('orders') ){
      localStorage.setItem('orders',JSON.stringify(orders))
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
  },[]);
  useEffect(()=>{
    if (totalOrders.length===0 || totalOrders===null){
      setTotalOrders(orders)
      localStorage.setItem('orders',JSON.stringify(orders))
      
    }
  },[totalOrders]);
  useEffect(()=>{
    if (products.length===0 || products===null){
      setProducts(data)
      localStorage.setItem('products',JSON.stringify(data))
      
    }

  },[products]);
    return(
      <>
       <div style={{ display: 'flex', gap: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1,marginTop:'10px' }}>
        <h2>Dashboard</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="card" onClick={() => { navigate('/products'); }}>
            <ProductView products={products} />
            View Products
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
          </div>
          <div className="card card-green" onClick={() => { navigate('/orders'); }}>
            <OrderView 
            orders={totalOrders} 
            />
            View Orders
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
            
          </div>
        </div>
        <div style={{marginTop:'50px',width:'49%',height:'50%'}}>
        <CalenderWidget/>

        </div>
      </div>
    </div>
      </>
    )
} 
export default Dashboard;