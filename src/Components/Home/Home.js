import React, { useEffect, useState } from 'react';
import './Home.css';
import SwiperSlide from './Slider/SwiperSlider';
import Contact from '../Contact/Contact';
import Card from '../Shared/Card';
import Title from '../Shared/Title';
import { useSelector } from 'react-redux';

const Home = () => {
  const Data = useSelector((state) => {
    return state.books.discoverList;
  });

  console.log(Data);

  return (
    <div>
      <SwiperSlide></SwiperSlide>
      <div className='col-md-10 offset-md-1'>
        <h1 className='text-center mt-5 fontWeight'>
          <Title data={{ title: 'TOP WORLD GAMES' }}></Title>{' '}
        </h1>
        <div class='row'>
          {Data.slice(0, 9).map((topWorldGamesData) => (
            <Card data={topWorldGamesData}></Card>
          ))}
        </div>

        <h1 className='text-center mt-5 fontWeight'>
          <Title data={{ title: 'GAMES OF THE YEAR' }}></Title>{' '}
        </h1>

        <div className='row'>
          {Data.slice(0, 9)
            .reverse()
            .map((gamesOfTheYearData) => (
              <Card data={gamesOfTheYearData}></Card>
            ))}
        </div>
        <h1 className='text-center mt-5 fontWeight'>
          <Title data={{ title: 'HOTTEST GAMES NEWS' }}></Title>
        </h1>

        <div className='row'>
          <div className='col-md-12 mt-2 mb-5 p-auto d-flex'>
            {Data.slice(9, 11).map((hottestGameNewsData) => (
              <div className='card mb-3 '>
                <div className='row'>
                  <div className='col-md-4'>
                    <img
                      src={hottestGameNewsData.img}
                      className='image'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {hottestGameNewsData.title}
                      </h5>
                      <p className='card-text'>
                        <small className='text-muted'>
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <p className='card-text'>{hottestGameNewsData.detail}</p>
                      <button type='button' className='buttonStyle'>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
