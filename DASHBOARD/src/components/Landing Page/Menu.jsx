import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);

  };

  const handleProfileClick = () => {
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
              to={"/home/summary"}
              onClick={() => handleMenuClick(1)}
              className={selectedMenu == 1 ? activeMenClass : menuClass}>
              <p >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/home/orders"}
              onClick={() => handleMenuClick(2)}
              className={selectedMenu == 2 ? activeMenClass : menuClass}>
              <p >Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/home/holdings"}
              onClick={() => handleMenuClick(3)}
              className={selectedMenu == 3 ? activeMenClass : menuClass}>
              <p >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/home/positions"}
              onClick={() => handleMenuClick(4)}
              className={selectedMenu == 4 ? activeMenClass : menuClass}>
              <p >Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/home/funds"}
              onClick={() => handleMenuClick(5)}
              className={selectedMenu == 5 ? activeMenClass : menuClass}>
              <p >Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/home/app"}
              onClick={() => handleMenuClick(6)}
              className={selectedMenu == 6 ? activeMenClass : menuClass}>
              <p >Apps</p>
            </Link>
          </li>
        </ul>
        <div className='profile' onClick={handleProfileClick}>
          <div className='content'>
            <div className='avatar'>ZU</div>
            <p className='username'>USERID</p>
          </div>
          {isProfileDropDown == true ? <>
            <div class="dropdown-content">
              <div className='drop-main-content'>
                <LogoutIcon />
                <span>LogOut</span>
              </div>
              <div className='drop-main-content'>
                <AccountBoxIcon />
                <span>Profile</span>
              </div>
            </div>
          </> : <></>}
        </div>

      </div>
    </div>
  )
}

export default Menu