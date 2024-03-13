import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../../components/SideBar/SideBar";
import CalenderWidget from "../../components/Calendar/CalenderWidget";
import "../CalenderView/CalenderView.css";
export default function CalendarView() {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const localizer = momentLocalizer(moment);
  const events = orders.map((order) => ({
    id: order.order_id,
    title: order.customer_name,
    start: new Date(order.order_date),
    end: new Date(order.order_date),
    status: order.status,
  }));
  return (
    <>
      <Sidebar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontFamily: "Arial, sans-serif",
        }}
        className="calender"
      >
        <div style={{ width: "150vh", height: "500px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              marginTop: "-10px",
            }}
          >
            Calendar Order
          </h2>
          <CalenderWidget />
        </div>
      </div>
    </>
  );
}
