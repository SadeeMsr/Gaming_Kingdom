import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Nav.css'
const TopNav = () => {
 const isLoggedin =  sessionStorage.getItem("isLoggedin")
  return (
    <div className="TopNav">

      <div className="d-flex">
        <div className="ml-auto d-flex"> <div className="InputIcon"><SearchIcon></SearchIcon></div> <input className="form-control" type="text"></input>
          <select className="form-control ml-5 selectLanguage" name="" id="">
            <option value="">English</option>
            <option value="">Bangladesh</option>
            <option value="">India</option>
            <option value="">USA</option>
          </select>
          
           {isLoggedin && <button onClick={()=>sessionStorage.setItem('isLoggedin','')} className="btn btn-danger ml-2 ">Logout</button>}
          
          </div>

      </div>
    </div >

  );
}

export default TopNav;
