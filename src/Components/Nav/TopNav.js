import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAuthUser } from '../../Redux/Action/AuthAction';
const TopNav = () => {
  const dispatch = useDispatch();
  const isLoggedin = sessionStorage.getItem('isLoggedin');
  const AuthData = useSelector((state) => {
    return state.Auth;
  });
  const { displayName, email } = AuthData || '';
  return (
    <div className='TopNav'>
      <div className='d-flex'>
        <div className='d-flex SearchInput'>
          {' '}
          <div className='InputIcon'>
            <SearchIcon></SearchIcon>
          </div>{' '}
          <input className='form-control' type='text'></input>
          <div
            className='form-control ml-5 selectLanguage w-100 ml-3 page__Name'
            name=''
            id=''
          >
            <h5 className='pb-2'>
              <span className='first__Name'>GAMING</span> KINGDOM
            </h5>
          </div>
          {isLoggedin || displayName ? (
            <button
              onClick={() => dispatch(RemoveAuthUser())}
              className='btn btn-danger ml-2 logoutbtn'
            >
              Logout
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
