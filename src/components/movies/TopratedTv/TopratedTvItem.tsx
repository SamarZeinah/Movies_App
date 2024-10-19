import React from 'react';
import styles from './TopratedTv.module.css';
import { Link } from 'react-router-dom';
const { trendimage, videocontainer, imagetitle, youtubeIcon } = styles;

interface TopratetvProps {
  id: number;
  name: string;
  poster_path: string;
  vote_average:number;
}

const ToprateTvItem = ({ id, name, poster_path }: TopratetvProps) => {
  console.log("ToprateTvItemTitle",name);
  return (
    <div className="d-flex justify-content-between">
      <Link style={{textDecoration:"none",color:"white"}} to={`/MovieDetails/${id}`} className={videocontainer}> 
      <img className={trendimage} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${name} poster`} />
        <h3 className={imagetitle}>{name}</h3>
        
        <button aria-label={`Watch trailer for ${name}`}>
          <img
            className={youtubeIcon}
            src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" fill="rgba(255, 0, 28, 1)"/></svg>`}
            alt="YouTube Icon"
          />
        </button>
        </Link>
      </div>
  );
}

export default ToprateTvItem;