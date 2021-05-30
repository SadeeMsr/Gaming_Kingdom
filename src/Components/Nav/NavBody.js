import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Nav.css'



const iconStyle = (fontsize) => {
  return {
    fill: "transparent",
    stroke: "#1a1a2c",
    // strokeWidth: 1,
    fontSize: fontsize,
  };
};


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
          <div className="mt-3"><NavLink className="text-dark" to="/"><HomeRoundedIcon  style={iconStyle(36)} /></NavLink></div>
          <div className="mt-3" ><NavLink className="text-dark" to="/"><ShoppingCartRoundedIcon style={iconStyle(34)}/></NavLink></div>
          <div className="mt-3"><NavLink className="text-dark" to="/"><BookmarksRoundedIcon style={iconStyle(30)}/></NavLink></div>
          <div className="mt-3"><NavLink className="text-dark" to="/"><WatchLaterRoundedIcon style={iconStyle(30)}/></NavLink></div>
          
        </div>

        <div className="h-25">
          <div className="mt-3"><NavLink className="text-white" to="/login"><AccountCircleIcon fontSize="large"></AccountCircleIcon></NavLink></div>
        </div>

      </div>
    </>
  );
}

export default NavBody;
