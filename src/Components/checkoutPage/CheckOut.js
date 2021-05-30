import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartList } from '../../Redux/Action/CartAction';

function CheckOut() {
  const dispatch = useDispatch();

  const Data = useSelector((state) => {
    return state.books.CartList;
  });

  const totalPrice = Data.reduce((value, current) => value + current.prize, 0);

  return (
    <div className='checkoutMain'>
      <div className='container container-checkout'>
        <table class='table table-responsive p-4 bg-primary text-white'>
          <thead>
            <tr>
              <th scope='col-2'>NO:</th>
              <th scope='col-2'>Name</th>
              <th scope='col-2'>Image</th>
              <th scope='col-2'>Price</th>
              <th scope='col-2'>Quenty</th>
              <th scope='col-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((pd) => {
              return (
                <tr>
                  <th scope='row'>1</th>
                  <td>{pd.gameName}</td>
                  <td>
                    <img width='70px' src={pd.img} alt='' />
                  </td>
                  <td>{'$' + pd.prize}</td>
                  <td>{1}</td>
                  <td>
                    <button
                      onClick={() => dispatch(removeFromCartList(pd.id))}
                      className='btn btn-danger'
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <h1>Total Price : {'$' + totalPrice}</h1>
          </tbody>

          <div className='d-flex'>
            <button className='btn btn-success'>Back</button>
            <button className='btn btn-success ml-auto'>Checkout</button>
          </div>
        </table>
      </div>
    </div>
  );
}

export default CheckOut;
