import React, { useEffect, useState } from 'react';
import './Home.css';
import SwiperSlide from './Slider/SwiperSlider';
import Contact from '../Contact/Contact';
import Card from '../Shared/Card';
import Title from '../Shared/Title';
import { useSelector } from 'react-redux';
import Blog from '../Blog/Blog';


const Home = () => {
  const Data = useSelector((state) => {
    return state.books.discoverList;
  });

  console.log(Data);

  return (
    <div className="px-2">
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
        
        <Blog></Blog>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
