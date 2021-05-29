import React from 'react';
import './Nav.css'
const TopNav = () => {
  return (
    <div className="TopNav d-flex">

      <div className="ml-auto">
        <input type="text"></input>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Bangladesh</option>
          <option value="">India</option>
          <option value="">USA</option>
        </select>
        <img width="100px" src="./images/banner.png" alt="" />
      </div>
    </div>

  );
}

export default TopNav;
