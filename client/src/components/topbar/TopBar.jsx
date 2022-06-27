import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';


const TopBar = () => {

  const { user, dispatch } = useContext(Context) 

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <a href="" className='hamburger'><GiHamburgerMenu/></a>
       <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
          <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <div className='search'>
          <i className="topSearchIcon fas fa-search"></i>
          <input type="text" placeholder='Search...'></input>
          </div>
         
        </ul>
      </div>
      <div className="topRight">
             {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
            {user && <div className='logout'  onClick={handleLogout}>{user && "LOGOUT"}</div> } 
      </div>
    </div>
  )
}

export default TopBar
