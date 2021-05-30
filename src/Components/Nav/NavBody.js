import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Nav.css';
import { useSelector } from 'react-redux';

const iconStyle = (fontsize) => {
  return {
    fill: 'white',
    stroke: '#1a1a2c',
    boxShadow: '0px 0px 10px 0px white',
    fontSize: fontsize,
    borderRadius: '10px',
  };
};

const NavBody = () => {
  const [display, setdisplay] = useState(true);
  const style = display ? { display: 'block' } : { display: 'none' };

  const Data = useSelector((state) => {
    return state.books.CartList;
  });

  return (
    <>
      <div className=' d-None mt-3'>
        <img
          onClick={() => setdisplay(!display)}
          width='50px'
          src='https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/256/Letter-G-icon.png'
          alt=''
        />
      </div>
      <div style={style} className='NavBody shadow'>
        <div className='h-25'></div>
        <div className='h-50'>
          <div className='mt-3'>
            <NavLink className='text-dark' to='/'>
              <HomeRoundedIcon style={iconStyle(37)} />
            </NavLink>
          </div>
          <div className='mt-3'>
            <NavLink className='text-dark' to='/checkout'>
              <ShoppingCartRoundedIcon style={iconStyle(37)} />
            </NavLink>
            <span className='cartLength'> {Data.length}</span>
          </div>
          <div className='mt-3'>
            <NavLink className='text-dark' to='/'>
              <BookmarksRoundedIcon style={iconStyle(37)} />
            </NavLink>
          </div>
          <div className='mt-3'>
            <NavLink className='text-dark' to='/'>
              <WatchLaterRoundedIcon style={iconStyle(37)} />
            </NavLink>
          </div>
        </div>

        <div className='h-25'>
          <div className='mt-3'>
            <NavLink className='text-white' to='/login'>
              <AccountCircleIcon fontSize='large'></AccountCircleIcon>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBody;
