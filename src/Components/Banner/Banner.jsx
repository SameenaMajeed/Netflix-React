
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";


const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data)
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length)
        setMovie(results[randomIndex]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      {movie && (
        <div className="content">
          <h1 className="title">{movie.title}</h1>
          <div className="banner__buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{movie.overview}</h1>
        </div>
      )}
      <div className="fade__bottom"></div>
    </div>
  );
};

export default Banner;
