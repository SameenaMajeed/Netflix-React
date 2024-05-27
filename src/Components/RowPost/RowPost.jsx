import React, { useEffect, useState } from "react";
import './RowPost.css';
import axios from "../../axios"; 
import {API_KEY,imageUrl} from "../../Constants/Constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]); 
  const [urlId,setUrlId] = useState([])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    } 
  }

  useEffect(() => {
    axios
      .get(props.url)
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results); 
      })
      .catch(error => {
        console.error("Error fetching TV shows:", error);
      });
  }, []);
  
  const handleMovie = (id) =>{
    console.log('id-',id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        alert('Cannot load the video')
        console.log('Array is empty');
      }
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies && movies.map(movie => (
          <img
            onClick={()=>handleMovie(movie.id)}
            key={movie.id}
            className={props.isSmall ? "smallPoster" :"poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} /> } 
    </div>
  );
}

export default RowPost;
