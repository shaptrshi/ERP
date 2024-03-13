import {useLocation} from 'react-router-dom';
import './EditProduct.css';
import Sidebar from '../../components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';


const EditProduct = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const id=location.state;
    const [products,setProducts]=useState(()=>{
        return JSON.parse(localStorage.getItem('products'))||[];
    });
    const [editUser,setEditUser]=useState(()=>{
        return JSON.parse(localStorage.getItem('products')).find(user=>user.id===id)
    })
    const save=(e)=>{
        e.preventDefault()
        const newProducts=products.map((product)=>{
            if(product.id===id){
                return editUser;
            }
            return product;
        });
        setProducts(newProducts);
        alert('Product Updated Successfully')
        
        
    }
    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products));
    },[products]);
    
    return (
        <>
        <div style={{display:'flex',gap:'20px',fontFamily: 'Arial, sans-serif'}}>
            <Sidebar/>
        

        
    <div>
    <div >

    <h2>Edit Product</h2>
    </div>
    <h1>{editUser.name}</h1>
    <form className="product-form">
  <div className="form-group">
    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" value={editUser.name} onChange={(event)=>{
        setEditUser({...editUser,name:event.target.value})
    }}/>
  </div>
  <div className="form-group">
    <label htmlFor="productCategory">Category:</label>
    <input type="text" id="productCategory" value={editUser.category} onChange={(event)=>{
        setEditUser({...editUser,category:event.target.value})
    }}/>
  </div>
  <div className="form-group">
    <label htmlFor="productStock">Stock:</label>
    <input type="number" id="productStock" value={editUser.stock} onChange={(event)=>{
        setEditUser({...editUser,stock:event.target.value})
    }}/>
  </div>
  <div className="form-group">
    <label htmlFor="productPrice">Price:</label>
    <input type="text" id="productPrice" value={editUser.price} onChange={(event)=>{
        setEditUser({...editUser,price:event.target.value})
    }}/>
  </div>
  <button onClick={(e)=>{save(e)}}>Save</button>
    </form>
    </div>
    </div>
    </>
    );
    }
export default EditProduct;