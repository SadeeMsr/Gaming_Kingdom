import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartList } from '../../Redux/Action/CartAction';
import './style.css';
function Card({ data }) {
  const dispatch = useDispatch();

  return (
    <div className='gx-2 col-md-6 col-lg-4'>
      <div className='col mt-5 mb-5'>
        <div className='text-center bg-card'>
          <img src={data.img} className='card-img-top' alt='' />
          <div className='card-body'>
            <h4 className='card-title fontWeight'>{data.author}</h4>
            <h5 className='card-text fontWeight'>{data.gameName}</h5>
            <h5 className='card-text fontWeight'>{data.prize}</h5>
            <button
              onClick={() => {
                dispatch(addToCartList(data));
              }}
              type='button'
              className='buttonStyle'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
