import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import orders from "../../data/orders";
import "./OrderPage.css";

const OrderPage = () => {
  const [search, setSearch] = useState("");
  const [orders, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  const currentOrders = orders.filter((order) => {
    return order && order.order_id.toString().includes(search);
  });

  return (
    <>
      <Sidebar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontFamily: "Arial, sans-serif",
          justifyContent: "center",
        }}
      >
        <div className="order">
          <div className="header">
            <h2>Orders List</h2>
            <input
              type="search"
              placeholder="Search Order"
              className="input-search"
              style={{
                width: "250px",
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
            {currentOrders.map((order) => (
              <div key={order.order_id} className="order-item">
                <button
                  className="btn"
                  onClick={() => {
                    if (!window.confirm("Are you sure you want to delete?")) {
                      return;
                    }

                    const newOrders = orders.filter(
                      (orderItem) => orderItem.order_id !== order.order_id
                    );
                    setOrder(newOrders);
                  }}
                >
                  Delete
                </button>

                <p>Order Id: {order.order_id}</p>
                <p>Customer Name: {order.customer_name}</p>
                <p>Order Date: {order.order_date}</p>
                <p>
                  Status:
                  <select
                    id="statusDropdown"
                    value={order.status}
                    onChange={(e) => {
                      const newOrders = orders.map((orderItem) => {
                        if (orderItem.order_id === order.order_id) {
                          return {
                            ...orderItem,
                            status: e.target.value,
                          };
                        }
                        return orderItem;
                      });

                      setOrder(newOrders);
                    }}
                  >
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Processing">Processing</option>
                    <option value="Dispatched">Dispatched</option>
                  </select>
                </p>
                <p>Products: </p>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.id}>
                      <p>Name: {product.name}</p>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price: {product.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderPage;
