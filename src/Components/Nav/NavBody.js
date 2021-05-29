import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Nav.css'

const NavBody = () => {

  const [display, setdisplay] = useState(false)
  const style = display ? {display:'block'}:{display:'none'}
  return (
    <>
      <div className=" d-None mt-3">
        <img onClick={()=>setdisplay(!display)} width="50px" src="https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/256/Letter-G-icon.png" alt="" />
      </div>
      <div style={style} className="NavBody shadow">
       <div className="h-25"></div>
        <div className="h-50">
          <div className="mt-3"><NavLink className="text-dark" to="/"><HomeIcon fontSize="large"></HomeIcon></NavLink></div>
          <div className="mt-3" ><NavLink className="text-dark" to="/"><ShoppingCartIcon fontSize="large"></ShoppingCartIcon></NavLink></div>
          <div className="mt-3"><NavLink className="text-dark" to="/"><BookmarksIcon fontSize="large"></BookmarksIcon></NavLink></div>
          <div className="mt-3"><NavLink className="text-dark" to="/"><ScheduleIcon fontSize="large"></ScheduleIcon></NavLink></div>
        </div>

        <div className="h-25">
          <div className="mt-3"><NavLink to="/login"><AccountCircleIcon fontSize="large"></AccountCircleIcon></NavLink></div>
        </div>

      </div>
    </>
  );
}

export default NavBody;
