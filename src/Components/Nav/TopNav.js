import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Nav.css'
const TopNav = () => {
 const isLoggedin =  sessionStorage.getItem("isLoggedin")
  return (
    <div className="TopNav">

      <div className="d-flex">
        <div className="ml-auto d-flex SearchInput"> <div className="InputIcon"><SearchIcon></SearchIcon></div> <input className="form-control" type="text"></input>
          <div className="w-100 ml-3 page__Name">
              <h5 className="pt-2"><span className="first__Name">GAMING</span> KINGDOM</h5>
          </div>
          
           {isLoggedin && <button onClick={()=>sessionStorage.setItem('isLoggedin','')} className="btn btn-danger ml-2 ">Logout</button>}
          
          </div>

      </div>
    </div >

  );
}

export default TopNav;
