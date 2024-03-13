import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
// import data from '../../data/data';
import "../Dashboard/Dashboard.css";

import "./ProductPage.css";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });
  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteProduct(id);
    }
  };
  const handleEdit = (id) => {
    navigate("/edit-products", { state: id });
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const currentProducts = products.filter((product) => {
    return (
      product &&
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()))
    );
  });
  return (
    <>
      <button
        className="addbtn"
        onClick={() => {
          navigate("/add-products");
        }}
      >
        +
      </button>
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div>
          <Sidebar />
        </div>
        <div className="product-page">
          <div className="header">
            <h2>Products List</h2>
            <input
              type="search"
              placeholder="Search Product"
              className="input-search"
              style={{
                width: "50%",
                borderRadius: "5px",
                border: "1px solid #ccc",
                padding: "10px 10px",
                marginBottom: "0px",
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="container">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-item">
                <p>{product.name}</p>
                <p>Category: {product.category}</p>
                <p>Stock: {product.stock}</p>
                <p>Price: {product.price}</p>
                <button
                  className="btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button className="btn" onClick={() => handleEdit(product.id)}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
