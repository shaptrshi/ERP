import { Link } from 'react-router-dom';
import './SideBar.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendar, faCartShopping, faHome, faList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (<>
      <div className="sidebar">
      <Link to='/'>
        <div style={{display:'flex',justifyContent:'center',}}>
          <FontAwesomeIcon style={{color:'#ffffff'}} icon={faCartShopping} />
          
          </div>
          </Link>
        <Link to='/'>
          <div className='navIcons'>
            <div>
              <FontAwesomeIcon icon={faHome}/>  
              <span>
                Dashboard
              </span>
              
              </div>
          </div>
        </Link>

        <Link to='/products'>
        <div className='navIcons'>
            <div>
              <FontAwesomeIcon icon={faBox}/>  
              <span>
                Products
              </span>
              
              </div>
          </div>
        </Link>
        <Link to='/orders'>
        <div className='navIcons'>
            <div>
              <FontAwesomeIcon icon={faList}/>  
              <span>
                Orders
              </span>
              
              </div>
          </div>
        </Link>
        <Link to='/orders-calendar'>
        <div className='navIcons'>
            <div>
              <FontAwesomeIcon icon={faCalendar}/>  
              <span>
                Orders Calendar View
              </span>
              
              </div>
          </div>
        </Link>
      </div>
    </>
    );
  };
export default Sidebar;