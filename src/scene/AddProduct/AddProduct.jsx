import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import { v4 } from "uuid";
import "./AddProduct.css";

const AddProduct = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });
  const [newUser, setNewUser] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });
  const save = (e) => {
    e.preventDefault();
    const newProducts = [...products, { ...newUser, id: v4() }];
    setProducts(newProducts);
    alert("New Product Added");
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
    <Sidebar />
      <div className="addProduct">
        <div className="product-container">
          <div className="product-header">
            <h2 className="product-title">Add New Product</h2>
          </div>
          <form className="product-form">
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                value={newUser.name}
                onChange={(event) => {
                  setNewUser({ ...newUser, name: event.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productCategory">Category:</label>
              <input
                type="text"
                id="productCategory"
                value={newUser.category}
                onChange={(event) => {
                  setNewUser({ ...newUser, category: event.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productStock">Stock:</label>
              <input
                type="number"
                id="productStock"
                value={newUser.stock}
                onChange={(event) => {
                  setNewUser({ ...newUser, stock: event.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price:</label>
              <input
                type="text"
                id="productPrice"
                value={newUser.price}
                onChange={(event) => {
                  setNewUser({ ...newUser, price: event.target.value });
                }}
              />
            </div>
            <button
              onClick={(e) => {
                save(e);
              }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
