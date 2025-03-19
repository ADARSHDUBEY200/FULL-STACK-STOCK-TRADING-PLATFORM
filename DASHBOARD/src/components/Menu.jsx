import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);

  };

  const handleProfileClick = (index) => {
    setIsProfileDropDown(!isProfileDropDown);

  }

  const menuClass = "menu";
  const activeMenClass = "menu selected";
  return (
    <div className='menu-container'>
      <img src="logo.png" alt="" style={{ width: "50px" }} />
      <div className='menus'>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(1)}
              className={selectedMenu == 1 ? activeMenClass : menuClass}>
              <p >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(2)}
              className={selectedMenu == 2 ? activeMenClass : menuClass}>
              <p >Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(3)}
              className={selectedMenu == 3 ? activeMenClass : menuClass}>
              <p >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(4)}
              className={selectedMenu == 4 ? activeMenClass : menuClass}>
              <p >Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(5)}
              className={selectedMenu == 5 ? activeMenClass : menuClass}>
              <p >Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/app"}
              onClick={() => handleMenuClick(6)}
              className={selectedMenu == 6 ? activeMenClass : menuClass}>
              <p >Apps</p>
            </Link>
          </li>
        </ul>
        <div className='profile' onClick={handleProfileClick}>
         <div className='avatar'>ZU</div>
         <p className='username'>USERID</p>
        </div>
      </div>
    </div>
  )
}

export default Menu