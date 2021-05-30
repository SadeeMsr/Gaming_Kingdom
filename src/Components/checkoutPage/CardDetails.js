import React from 'react';
import './CardDetail.css';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { FaLocationArrow } from 'react-icons/fa';
import { useParams } from 'react-router';
import jsonData from '../FackData/data.json';
import { addToCartList } from '../../Redux/Action/CartAction';
import { useDispatch } from 'react-redux';
const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Data = jsonData.find((item) => item.id == id);
  console.log(Data);
  return (
    <div className='productSingle'>
      <div className='productSingle__inner'>
        <div className='productSingle__image shadow-lg'>
          <img src={Data.img} alt='imageName' />
        </div>
        <div className='productSingle__details'>
          <h2>{Data.gameName}</h2>
          <ul className='productSingle__features'>
            <li>
              {' '}
              <FaLocationArrow
                style={{
                  color: 'goldenrod',
                  fontSize: '20px',
                  marginRight: '5px',
                }}
              />{' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              ut! box card habi jani
            </li>
            <li>
              {' '}
              <FaLocationArrow
                style={{
                  color: 'goldenrod',
                  fontSize: '20px',
                  marginRight: '5px',
                }}
              />{' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              ut! box card habi jani
            </li>
            <li>
              {' '}
              <FaLocationArrow
                style={{
                  color: 'goldenrod',
                  fontSize: '20px',
                  marginRight: '5px',
                }}
              />{' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              ut! box card habi jani
            </li>
            <li>
              {' '}
              <FaLocationArrow
                style={{
                  color: 'goldenrod',
                  fontSize: '20px',
                  marginRight: '5px',
                }}
              />{' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              ut! box card habi jani
            </li>
          </ul>
          <span className='productSingle__footer'>
            <p className='productSingle__price'>
              <h4>$ {Data.prize}</h4>
            </p>
            <div className='buttons'>
              <button
                onClick={() => {
                  dispatch(addToCartList(Data));
                }}
                className='btn btn-primary shadow'
              >
                <ShoppingCartRoundedIcon /> ADD TO CART
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
