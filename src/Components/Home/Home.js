import React, { useEffect, useState } from "react";
import "./Home.css";
import SwiperSlide from "./Slider/SwiperSlider";
import topWorldGames from "../FackData/topWorldGames.json";
import gamesOfTheYear from "../FackData/gamesOfTheYear.json";
import hottestGameNews from "../FackData/hottestGameNews.json";
import Contact from "../Contact/Contact";

const Home = () => {
  const [topWorldGamesData, setTopWorldGamesData] = useState([]);
  useEffect(() => {
    setTopWorldGamesData(topWorldGames);
  }, []);
  const [gamesOfTheYearData, setGamesOfTheYearData] = useState([]);
  useEffect(() => {
    setGamesOfTheYearData(gamesOfTheYear);
  }, []);
  const [hottestGameNewsData, setHottestGameNewsData] = useState([]);
  useEffect(() => {
    setHottestGameNewsData(hottestGameNews);
  }, []);
  return (
    
    <div>
      <SwiperSlide></SwiperSlide>
      <div className="container-fluid">
        <h1 className="text-center mt-5 fontWeight">TOP WORLD GAMES</h1>
        <div class="row">
          {topWorldGamesData.map((topWorldGamesData) => (
            <div className="col mt-5 mb-5">
              <div className="card text-center shadow bg-body rounded">
                <img
                  src={topWorldGamesData.img}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title fontWeight">
                    {topWorldGamesData.author}
                  </h4>
                  <h5 className="card-text fontWeight">
                    {topWorldGamesData.gameName}
                  </h5>
                  <h5 className="card-text fontWeight">
                    {topWorldGamesData.prize}
                  </h5>
                  <button type="button" className="buttonStyle">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-center mt-5 fontWeight">GAMES OF THE YEAR</h1>
        <div className="row">
          {gamesOfTheYearData.map((gamesOfTheYearData) => (
            <div className="col mt-5 mb-5">
              <div className="card text-center shadow bg-body rounded">
                <img
                  src={gamesOfTheYearData.img}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-text fontWeight">
                    {gamesOfTheYearData.gameName}
                  </h4>
                  <h5 className="card-text fontWeight">
                    {gamesOfTheYearData.prize}
                  </h5>
                  <button type="button" className="buttonStyle">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="mt-5 fontWeight">HOTTEST GAMES NEWS</h1>
        <div className="row">
          <div className="col-md-12 mt-2 mb-5 p-auto d-flex">
            {hottestGameNewsData.map((hottestGameNewsData) => (
              <div className="card mb-3 ">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={hottestGameNewsData.img}
                      className="image"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {hottestGameNewsData.title}
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <p className="card-text">{hottestGameNewsData.detail}</p>
                      <button type="button" className="buttonStyle">
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
