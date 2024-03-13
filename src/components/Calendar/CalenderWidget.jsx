import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
function CalenderWidget() {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders"));
  });
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState();

  useEffect(() => {
    if (orders !== null && orders.length != 0) {
      setEvents(() => {
        return orders.map((order) => ({
          id: order.order_id,
          title: order.customer_name,
          start: new Date(order.order_date),
          end: new Date(order.order_date),
          status: order.status,
        }));
      });
    } else {
      setEvents([]);
    }
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
      statusAccessor="status"
    />
  );
}
export default CalenderWidget;
