const OrderView= (
  { orders }
) => {
  return (
    <div>
      <h1>Orders</h1>
      <p>Total Orders: {orders!=null && orders.length}</p>
      <p>Pending Orders:
        <span>{orders && orders.filter((order) => order.status === 'Processing').length}</span>
      </p>
      <p>Shipped Orders:
        <span>{orders && orders.filter((order) => order.status === 'Shipped').length}</span>
      </p>
      <p>
        Delivered Orders:
        <span>{orders && orders.filter((order) => order.status === 'Delivered').length}</span>

      </p>
    </div>
  );
}
export default OrderView;