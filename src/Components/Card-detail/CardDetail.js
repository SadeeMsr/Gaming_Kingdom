import React from 'react';
import './CardDetail.css';
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { FaLocationArrow } from 'react-icons/fa';







const CardDetail = () => {
    return (
        <div className="productSingle bg-light">
        <div className="productSingle__inner">
          <div className="productSingle__image shadow-lg">
            <img src="https://assets.hongkiat.com/uploads/ps3-game-covers/Alone-in-the-Dark.jpg" alt="imageName"/>
          </div>
          <div className="productSingle__details">
              <h2>The Game of Thrones</h2>
            <ul className="productSingle__features">
                <li> <FaLocationArrow style={{color:"goldenrod", fontSize:"20px", marginRight:'5px'}}/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ut! box card habi jani</li>
                <li> <FaLocationArrow style={{color:"goldenrod", fontSize:"20px", marginRight:'5px'}}/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ut! box card habi jani</li>
                <li> <FaLocationArrow style={{color:"goldenrod", fontSize:"20px", marginRight:'5px'}}/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ut! box card habi jani</li>
                <li> <FaLocationArrow style={{color:"goldenrod", fontSize:"20px", marginRight:'5px'}}/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ut! box card habi jani</li>
                
            </ul>
            <span className="productSingle__footer">
              <p className="productSingle__price">
                <h4>$ 108</h4>
              </p>
              <div className="buttons">
                  <button className="btn btn-primary shadow">
                    <ShoppingCartRoundedIcon /> Added
                  </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
};

export default CardDetail;