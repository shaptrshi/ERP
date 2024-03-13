import { Link } from "react-router-dom";
import "./SideBar.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import {
  faBox,
  faCalendar,
  faCartShopping,
  faHome,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const list = (anchor) => (
    <div
      className="sidebar"
      style={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FontAwesomeIcon
            style={{ fontSize: "50px", padding: "10px", color: "#000" }}
            icon={faCartShopping}
          />
        </div>
      </Link>
      <Link to="/">
        <div className="navIcons">
          <div>
            <FontAwesomeIcon
              icon={faHome}
              style={{ color: "#000", fontSize: "20px" }}
            />
            <span>Dashboard</span>
          </div>
        </div>
      </Link>
      <Link to="/products">
        <div className="navIcons">
          <div>
            <FontAwesomeIcon
              icon={faBox}
              style={{ color: "#000", fontSize: "20px" }}
            />
            <span>Products</span>
          </div>
        </div>
      </Link>
      <Link to="/orders">
        <div className="navIcons">
          <div>
            <FontAwesomeIcon
              icon={faList}
              style={{ color: "#000", fontSize: "20px" }}
            />
            <span>Orders</span>
          </div>
        </div>
      </Link>
      <Link to="/orders-calendar">
        <div className="navIcons">
          <div>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#000", fontSize: "20px" }}
            />
            <span>Orders Calendar View</span>
          </div>
        </div>
      </Link>
    </div>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <div className="menu">
        <MenuIcon
          onClick={toggleDrawer("left", true)}
          style={{
            padding: "10px",
          }}
        />
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
